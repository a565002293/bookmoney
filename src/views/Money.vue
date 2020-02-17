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
import { Component } from "vue-property-decorator";

window.localStorage.setItem("version", "0.0.1");

@Component({
  components: { Tags, FormItem, Types, NumberPad }
})
export default class Money extends Vue {
  tags = window.tagList;
  recordList: RecordItem[] = window.recordList;
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
    window.createRecord(this.record);
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
