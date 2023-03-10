<script setup>
// 在开发中，模块是慢慢进行拆分的，公共的模块会放到 components 文件夹中，其他的会放到自己业务模块中；
// 首页模块拆分成：静态（类别）+ 动态（列表）
import category from './category.vue'
import list from './list.vue'
import { onMounted, ref } from 'vue'
import { getPageLists } from '../../../api/api.js'
let products = ref([])

onMounted(() => {
    fn()
})

async function fn() {
    let res = await getPageLists(2,15)
    products.value = res.data
}
// 记录小笔记：
// vue add element-ui | npm i element-ui 区别，安装过程中增加了模块，修改了代码
</script>

<template>
    <div class="content">
        <category />
        <list :products="products" />
    </div>
</template>

<style scoped>

</style>