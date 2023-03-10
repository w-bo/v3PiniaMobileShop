import { defineStore } from 'pinia'

export const basketStore = defineStore('basket', {
    state: () => ({
        basketData: [], // 购物车数据
    }),
    getters: {
        totalCount: (state) => state.basketData.length,
    },
    actions: {
        addBasket(item){
            this.basketData.push(item)
        }
    },
    persist: {
        enabled: true, // 开启持久化存储
        // strategies: [
        //     {
        //         key: 'store',
        //         storage: localStorage,
        //         paths: ['basketData', 'isShowNav']
        //     }
        // ]
    }
})