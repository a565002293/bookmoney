
const localStorageKeyName = 'tagList';
type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated';//success表示成功，duplicated表示name重复
    save: () => void;
}
const tagListModel: TagListModel = {
    data:[],
    fetch() {
        this.data =  JSON.parse(
            window.localStorage.getItem("tagList") || "[]"
        ) ;
        return this.data;
    },
    create(name ){
        if(this.data.indexOf(name) >=0){return 'duplicated';}
        this.data.push(name);
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem("recordList", JSON.stringify(this.data));
    },

};

export { tagListModel };
