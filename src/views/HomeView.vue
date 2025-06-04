<template>
  <el-container>
    <!-- Navbar -->
    <el-row style="width: 100%">
      <el-header
        style="
          width: 100%;
          height: 40px;
          background-color: var(--custom-black);
          color: white;
          display: flex;
          align-items: center;
          padding: 0em 2em;
        "
      >
        <el-row style="width: 100%" align="middle" justify="space-between">
          <el-col :span="2" style="display: flex; align-items: center; gap: 5px">
            <el-icon :size="20"><Phone /></el-icon>
            <el-text style="font-size: 12px">+639123456789</el-text>
          </el-col>
          <el-col
            :span="20"
            style="display: flex; align-items: center; justify-content: center; gap: 5px"
          >
            <el-text>Get 50% off on an selected item | Shop now</el-text>
          </el-col>
          <el-col
            :span="2"
            style="display: flex; align-items: center; justify-content: end; gap: 1.5em"
          >
            <el-dropdown placement="bottom-start">
              <el-row style="gap: 5px; cursor: pointer">
                <el-text> Eng </el-text>
                <el-icon :size="15" color="white"><ArrowDown /></el-icon>
              </el-row>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>The Action 1st</el-dropdown-item>
                  <el-dropdown-item>The Action 2st</el-dropdown-item>
                  <el-dropdown-item>The Action 3st</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown placement="bottom-start">
              <el-row style="gap: 5px; cursor: pointer">
                <el-text> Location </el-text>
                <el-icon :size="15" color="white"><ArrowDown /></el-icon>
              </el-row>
              
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>The Action 1st</el-dropdown-item>
                  <el-dropdown-item>The Action 2st</el-dropdown-item>
                  <el-dropdown-item>The Action 3st</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>

      <el-col>
        <el-row align="middle" style="padding: 1em">
          <el-col :span="12">
            <el-text style="font-size: 40px; margin-left: 10px; color: var(--custom-black)"
              >The Daily Find</el-text
            >
          </el-col>
          <el-col :span="12">
            <el-container class="logInSignUpCon">
              <el-text style="margin: auto; color: var(--custom-black); font-size: 15px">
                Log In
              </el-text>
            </el-container>
          </el-col>
        </el-row>
      </el-col>
      <el-divider style="margin: 0"></el-divider>
    </el-row>

    <!-- Hero -->
    <el-row style="width: 100%; min-height: 800px; padding: 1em">
      <el-col style="height: 100%; width: 100%" :span="14"> </el-col>
      <el-col :span="10" style="width: 100%; height: 100%">
        <el-row style="width: 100%; height: 100%">
          <el-row style="width: 100%; height: 50%">
            <el-row style="height: 100%; width: 50%" />
            <el-row style="height: 100%; width: 50%" />
          </el-row>
          <el-row style="height: 50%; width: 100%" />
        </el-row>
      </el-col>
    </el-row>

    <!-- Filters -->
    <FilterView />

    <!-- Products -->
    <el-row class="cards-container" align="middle" justify="space-between">
      <ProductCard
        v-for="(item, index) in productStore.getProducts"
        :key="index"
        :product="item"
        @add-to-cart="onAddToCart"
      />
    </el-row>

    <!-- Cart Drawer as child component -->
    <CartDrawer
      :visible="cartStore.drawerVisible"
      :items="cartStore.items"
      @close="cartStore.toggleDrawer(false)"
      @remove="cartStore.removeFromCart"
    />

    <!-- Footer -->
    <el-footer>
      <el-text>FOOTER</el-text>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { getProducts } from '@/api/actions/product.actions'
import CartDrawer from '@/components/CartDrawer.vue'
import FilterView from '@/components/home/FilterView.vue'
import type { ProductTypes } from '@/models/types'
import { useCartStore } from '@/stores/cartStore'
import { useProductStore } from '@/stores/productStore'
import { onMounted } from 'vue'

const productStore = useProductStore()
const cartStore = useCartStore()

function onAddToCart(product: ProductTypes) {
  cartStore.addToCart(product)
  // cartStore.toggleDrawer(true)
}

onMounted(async () => {
  await getProducts()
})
</script>

<style scoped>
.el-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logInSignUpCon {
  display: flex;
  float: right;
  height: 60px;
  width: 10%;
  border-radius: 100px;
  background-color: #dfdfdf;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 1em;
  width: 75%;
  padding-bottom: 2em;
}

.el-text {
  color: var(--custom-off-white);
}

.el-footer {
  width: 100%;
  height: 400px;
  background: var(--custom-black);
  padding: 2em;
}
</style>
