/**
 * 判断重复函数
 * @description: 判断是否重复
 * @param { number } id 每一项的id
 * @param { Array | Object} list 购物车总的数据
 */

export const repeat = (id, list) => {
    // 判断是否重复
    let flag = false
    list.forEach(v => {
        if(v.id === id) {
            flag = true
        }
    })
    return flag
}