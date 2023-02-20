<script setup>
// 在开发中，模块是慢慢进行拆分的，公共的模块会放到 components 文件夹中，其他的会放到自己业务模块中；
// 首页模块拆分成：静态（类别）+ 动态（列表）
import category from './category.vue'
import list from './list.vue'
</script>

<template>
    <div class="content">
        <category />
        <list />
    </div>
</template>

<style scoped>

</style>