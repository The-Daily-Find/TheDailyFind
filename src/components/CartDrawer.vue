<template>
  <el-drawer
    :model-value="visible"
    title="Shopping Cart"
    direction="rtl"
    size="30%"
    @close="onClose"
  >
    <div v-if="items.length === 0">
      <el-empty description="Your cart is empty" />
    </div>
    <el-row v-else direction="vertical" style="gap: 1em">
      <el-card
        v-for="(item, idx) in items"
        :key="idx"
        style="margin-bottom: 10px"
      >
        <el-row align="middle" justify="space-between">
          <el-col :span="6">
            <img :src="item.image" style="width: 50px; height: 50px; object-fit: contain" />
          </el-col>
          <el-col :span="12">
            <el-text>{{ item.title }}</el-text>
            <el-text style="display: block; color: var(--color-green)">₱ {{ item.price }}</el-text>
          </el-col>
          <el-col :span="6">
            <el-button
              type="danger"
              size="small"
              @click="$emit('remove', idx)"
              >Remove</el-button
            >
          </el-col>
        </el-row>
      </el-card>
      <el-divider />
      <el-row justify="end">
        <el-text style="font-weight: bold; font-size: 18px">
          Total: ₱
          {{
            items.reduce((sum, item) => sum + item.price, 0).toFixed(2)
          }}
        </el-text>
      </el-row>
    </el-row>
  </el-drawer>
</template>

<script setup lang="ts">
import type { ProductTypes } from '@/models/types';

defineProps<{
  visible: boolean
  items: ProductTypes[]
}>()

const emit = defineEmits(['close', 'remove'])

function onClose() {
  emit('close')
}
</script>