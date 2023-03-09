<script setup>
import { ref } from "vue";

const { products } = defineProps({
  products: Array,
  default: () => [{}],
});

function getImg(name) {
    return new URL(`../../../assets/image/${name}`, import.meta.url).href
}
</script>
<template>
  <div class="c-wrap">
    <ul>
      <li v-for="v in products" :key="v.id">
        <div class="c-wrap-img">
          <img :src="getImg(v.img)" :alt="v.title">
        </div>
        <h4>{{ v.title }}</h4>
        <div class="c-wrap-info">
          <i>¥</i>
          <b>{{ v.price }}</b>
          <span class="shoppingCart">
            <i class="iconfont icon-gouwuche"></i>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
