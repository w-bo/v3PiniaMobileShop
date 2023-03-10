import { defineStore } from "pinia";

export const mainStore = defineStore('main', {
    state: () => ({
        isShowNav: true, // 是否显示底部导航
        n: 100
    })
})