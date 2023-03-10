<script setup>
import NavBottom from './views/NavBottom.vue'
import { mainStore } from "./store";

const store = mainStore()
</script>

<template>
  <router-view></router-view>
  <NavBottom v-if="store.isShowNav" />
</template>

<style scoped>

</style>
