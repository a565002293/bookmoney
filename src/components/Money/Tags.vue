<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag">{{tag}}</li>
        </ul>
    </div>

</template>
<script lang="ts">
    import Vue from "vue";
    import { Component,Prop} from "vue-property-decorator";
    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: string[] | undefined;
        selectedTags: string[]=[]
    }
</script>

<style lang="scss" scoped>
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            flex-wrap: wrap;
            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
            }
        }
        > .new {
            padding-top: 16px;
            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>