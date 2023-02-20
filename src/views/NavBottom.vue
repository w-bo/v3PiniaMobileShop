<script setup>
import { ref } from "vue";
import { navData as lists } from '../utils/commonData.js'
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
