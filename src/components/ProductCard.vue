<template>
  <el-col :span="24" align="center" justify="center" class="card-container">
    <el-button class="heart-button">
      <el-icon :size="20">
        <Star />
      </el-icon>
    </el-button>
    <img :src="product.image" />
    <el-row style="width: 100%; padding: 1em; flex-direction: column" justify="start">
      <el-text class="clamp-1 poppins-semibold" style="width: 100%; text-align: start">{{
        product.title
      }}</el-text>
      <el-text style="width: 100%; text-align: start" size="small">{{ product.category }}</el-text>
      <el-row>
        <el-rate v-model="rate" />
        <el-text style="font-size: 12px" size="small">{{
          `(${product.rating.count} reviews)`
        }}</el-text>
      </el-row>
      <el-text
        style="width: 100%; text-align: start; color: var(--color-green); font-size: 28px"
        size="large"
        class="poppins-bold"
        >{{ `₱ ${product.price}` }}</el-text
      >
      <el-button
        type="primary"
        @click.stop="$emit('add-to-cart', product)"
        >Add to Cart</el-button
      >
    </el-row>
  </el-col>
</template>

<script setup lang="ts">
import type { ProductTypes } from '@/models/types';
// import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue';

type Props = {
  product: ProductTypes
}
const props = defineProps<Props>()
const rate = ref(Math.floor(props.product.rating.rate))
// const cartStore = useCartStore()

// function handleAddToCart() {
//   cartStore.addToCart(props.product)
//   // cartStore.toggleDrawer(true)
// }
</script>

<style scoped>
.card-container {
  width: 300px;
  height: 100%;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: white;
  position: relative;
}
img {
  width: 100%;
  height: 300px;
  padding: 2em;
}
.clamp-1 {
  font-size: 16px;
  line-height: 1.4;
  line-clamp: 1;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-button {
  width: fit-content;
  border: 2px solid var(--color-green);
  color: var(--color-green);
  margin-top: 8px;
}

.card-button:hover {
  background: var(--color-green);
  color: white;
  cursor: pointer;
}
.heart-button {
  border-radius: 50px;
  padding: 0;
  margin: 0;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: white;
  right: 5%;
  top: 3%;
}

.heart-button:hover {
  border: 2px solid var(--color-green);
  background-color: var(--color-green);
  color: white;
}
</style>
