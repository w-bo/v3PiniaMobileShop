import { defineStore } from 'pinia'
import { repeat } from '../utils/repeat'

export const basketStore = defineStore('basket', {
    state: () => ({
        basketData: [], // 购物车数据
    }),
    getters: {
        totalCount: (state) => {
            // 返回数量
            // return state.basketData.length
            let total = 0
            state.basketData.forEach(v => total += v.count)
            return total
        }
    },
    actions: {
        addBasket(item){
            // 处理item的数量
            if(!item.count){
                item.count = 1
            }
            // 根据 id 判断是否重复，重复数量+1
            const flag = repeat(item.id, this.basketData)
            if(flag) {
                // 重复 找到购物车中的数据，count+1
                const index = this.basketData.findIndex(v => v.id === item.id)
                this.basketData[index].count += 1
            }else {
                // 不重复
                this.basketData.push(item)
            }
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