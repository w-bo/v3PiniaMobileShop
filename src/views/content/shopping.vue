<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import { basketStore } from '../../store/basket';

const store = basketStore()
const { basketData } = storeToRefs(store)
let title = ref('shopping')
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="basket">
            <ul class="basket-list">
                <li v-for="v in basketData" :key="v.id">
                    <div class="basket-img">
                        <img :src="`/src/assets/image/${v.img}`">
                    </div>
                    <div class="basket-info">
                        <div>
                            标题：{{ v.title }}
                        </div>
                        <div>
                            数量：{{ v.count }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>