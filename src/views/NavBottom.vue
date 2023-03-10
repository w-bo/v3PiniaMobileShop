<script setup>
import { ref } from "vue";
import { navData as lists } from '../utils/commonData.js'
import { basketStore } from "../store/basket";
import { storeToRefs } from "pinia";
const store = basketStore()

// 解构并使数据具有响应式
const { totalCount } = storeToRefs(store)

</script>

<template>
  <div>
    <div class="footer"></div>
    <div class="footer-seat">
      <div class="footer-lists">
        <ul>
          <li v-for="v in lists" :key="v.path">
            <router-link :to="v.path" active-class="selected">
              <i :class="['iconfont', v.icon]"></i>
              <span>{{ v.title }}</span>
            </router-link>
            <span class="count" v-show="v.path === '/shopping'">{{ totalCount }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
