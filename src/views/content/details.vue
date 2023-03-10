<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetails } from '../../api/api'

let infoData = ref([])
// 路由传参，拿取参数, 当前路由信息对象
const route = useRoute()
// console.log(route)
const id = route.params.id
// 获取路由实例
const router = useRouter()

// 发送请求，获取数据
onMounted(async () => {
    const res = await getDetails({ mid: id })
    infoData.value = res
})

const goBack = () => router.push('/home')
const getImg = (name) => false ? new URL(`../../assets/image/${name}`, import.meta.url).href : `/src/assets/image/${name}`
</script>

<template>
  <div>
    <div class="other-header" v-for="v in infoData" :key="v.id">
        <img :src="getImg(v.img)" :alt="v.title">
        <p>{{ v.title }}</p>
        <div class="go-back">
            <button class="back" @click="goBack">返回</button>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
