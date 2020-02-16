<template>
    <layout>

    </layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {tagListModel} from "@/model/tagListModel";

    @Component
    export default class EditLabels extends Vue {
        created(){
           const {id}=this.$route.params;
            tagListModel.fetch();
           const tags = tagListModel.data;
           const tag = tags.filter(t => t.id === id)[0];
           if(tag){
               return
           }else {
               this.$router.replace('/404')

           }
        }
    }
</script>

<style lang="scss" scoped>

</style>