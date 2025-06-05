<template>
  <el-container class="viewer-container">
    <el-main>
      <el-row :gutter="40" class="viewer-row" align="middle" justify="center">
        <el-col :xs="24" :md="10" class="image-col">
          <el-image
            :src="product?.image"
            fit="contain"
            style="width: 100%; border-radius: 20px; box-shadow: 0 2px 16px #0001"
            :preview-src-list="[product?.image]"
          />
        </el-col>
        <el-col :xs="24" :md="14" class="info-col">
          <el-card shadow="hover" class="info-card">
            <el-row justify="center">
              <el-col :span="24" style="display: flex; justify-content: center; margin-bottom: 1em;">
                <el-button type="info" plain @click="goBack" icon="el-icon-arrow-left">Back</el-button>
              </el-col>
              <el-col :span="24" style="text-align: center;">
                <el-text tag="h2" style="font-size: 2.2rem; font-weight: bold;">{{ product?.title }}</el-text>
              </el-col>
              <el-col :span="24" style="margin: 1em 0; text-align: center;">
                <el-tag size="large" effect="dark" type="info">{{ product?.category }}</el-tag>
              </el-col>
              <el-col :span="24" style="text-align: center;">
                <el-rate :model-value="product?.rating?.rate" disabled show-score />
                <span style="margin-left: 8px;">({{ product?.rating?.count }} reviews)</span>
              </el-col>
              <el-col :span="24" style="margin: 1.5em 0; text-align: center;">
                <el-text style="font-size: 1.2rem;">{{ product?.description }}</el-text>
              </el-col>
              <el-col :span="24" style="margin-bottom: 1.5em; text-align: center;">
                <el-text tag="h3" style="font-size: 2rem; color: var(--el-color-primary); font-weight: bold;">
                  ${{ product?.price }}
                </el-text>
              </el-col>
              <el-col :span="24" style="text-align: center;">
                <el-button type="primary" size="large" @click="addToCart" style="width: 80%; font-size: 1.2rem;">
                  Add to Cart
                </el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { useProductStore } from '@/stores/productStore'
import { ElNotification } from 'element-plus'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()

const productId = computed(() => Number(route.params.id))
const product = computed(() =>
  productStore.getProducts.find((p) => p.id === productId.value)
)

const goBack = () => {
  router.back()
}

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    ElNotification({
      title: 'Success',
      message: 'Product added to cart!',
      type: 'success',
      duration: 2000,
      position: 'top-right',
    })
  }
}
</script>

<style scoped>
.viewer-container {
  min-height: 100vh;
  background: linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%);
  padding: 2em 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.viewer-row {
  max-width: 1200px;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-col,
.info-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info-card {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 2px 16px #0001;
  background: #fff;
}
@media (max-width: 768px) {
  .viewer-row {
    flex-direction: column;
  }
  .info-card {
    max-width: 100%;
  }
}
</style>