<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateNumberPad" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>

  </Layout>
</template>

<script  lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';

  window.localStorage.setItem('version','0.0.1');
  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
  }
  @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行', '彩票'];
    recordList: Record[]=JSON.parse(window.localStorage.getItem('recordList')|| '[]');
    record: Record = {
      tags: [], notes: '', type: '-', amount: 0
    };
  onUpdateNumberPad(value: number) {
    this.record.amount = value;
  }
  onUpdateTags(value: string[]){
    this.record.tags =value;
  }
  onUpdateNotes(value: string){
    this.record.notes =value;
  }
  saveRecord(){
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2)
  }
  @Watch('recordList')
    onRecordListChanged(){
    window.localStorage.setItem('recordList',JSON.stringify(this.record))
  }
}
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
