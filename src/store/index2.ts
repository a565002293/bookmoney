import recordStore from "@/store/recordStore";
import tagStore from "@/store/tagStore";

const store = {
    ...tagStore,
    ...recordStore
};

export default store;