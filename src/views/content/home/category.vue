<script setup>
import { ref } from 'vue'
import { categoryData } from '../../../utils/commonData.js'
</script>

<template>
    <div class="nav">
        <ul>
            <li v-for="(v, i) in categoryData" :key="i">
                <img :src="`/src/assets/image/${v.img}`" />
                <p>{{ v.title }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>