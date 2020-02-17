<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateNumberPad" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="note">
      <FormItem
        field-name="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
import { recordListModel } from "@/model/recordListModel";
import tagListModel from "@/model/tagListModel";

window.localStorage.setItem("version", "0.0.1");
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: { Tags, FormItem, Types, NumberPad }
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0
  };
  onUpdateNumberPad(value: number) {
    this.record.amount = value;
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChanged() {
    recordListModel.save(this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
  .note{
    padding: 12px 0;
  }
</style>
