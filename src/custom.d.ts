type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
}
type Tag ={
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';//success表示成功，duplicated表示name重复
    save: () => void;
    update: (id: string, name: string) => 'success' | 'not found'| 'duplicated';
    remove: (id: string) => boolean;
}
