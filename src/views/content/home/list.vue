<script setup>
import { ref } from "vue";
import { basketStore } from "@/store/basket";

const { products } = defineProps({
  products: Array,
  default: () => [{}],
});

const store = basketStore()

function getImg(name) {
    return new URL(`../../../assets/image/${name}`, import.meta.url).href
}

function addBasket(v) {
    store.addBasket(v)
}
</script>
<template>
  <div class="c-wrap">
    <ul>
      <li v-for="v in products" :key="v.id">
        <div class="c-wrap-img">
            <router-link :to="`/details/${v.id}`">
              <img :src="getImg(v.img)" :alt="v.title">
            </router-link>
        </div>
        <h4>{{ v.title }}</h4>
        <div class="c-wrap-info">
          <i>¥</i>
          <b>{{ v.price }}</b>
          <span class="shoppingCart" @click="addBasket(v)">
            <i class="iconfont icon-gouwuche"></i>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
