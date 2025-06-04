<template>
  <el-container style="width: 100%; height: 100vh">
    <!-- Sidebar -->
    <el-aside
      style="
        width: 250px;
        display: flex;
        padding: 2em;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
      "
    >
      <el-row style="flex-direction: column" align="middle" justify="center">
        <el-icon size="60"><ShoppingCartFull /></el-icon>
        <el-text style="color: var(--custom-off-white); font-size: 20px" class="poppins-semibold"
          >TheDailyFind</el-text
        >
      </el-row>
    </el-aside>

    <!-- Mainbar -->
    <el-container style="padding: 4em; gap: 1em">
      <!-- Main Header -->
      <el-header style="width: 100%; height: fit-content; padding: 0">
        <el-row align="middle" style="width: 100%">
          <el-text
            class="poppins-bold"
            style="font-size: 34px; font-weight: bold; color: var(--custom-black)"
            >Welcome, John Doe!</el-text
          >
        </el-row>
      </el-header>

      <!-- Main -->
      <el-main>
        <el-row :gutter="16" align="middle" style="height: 200px">
          <el-col :span="8" style="width: 100%; height: 100%">
            <el-card style="width: 100%; height: 100%">
              <el-text>CARD</el-text>
            </el-card>
          </el-col>
          <el-col :span="8" style="width: 100%; height: 100%">
            <el-card style="width: 100%; height: 100%">
              <el-text>CARD</el-text>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 1em">
          <el-table show-overflow-tooltip :data="dummyProducts" style="width: 100%" height="100%">
            <el-table-column type="selection" width="55" />
            <el-table-column
              sortable
              column-key="date"
              prop="category"
              label="Category"
              width="150"
              :filters="[
                { text: 'Electronics', value: 'Electronics' },
                { text: 'Fitness', value: 'Fitness' },
                { text: 'Footwear', value: 'Footwear' },
                { text: 'Home Appliances', value: 'Home Appliances' },
              ]"
              :filter-method="filterHandler"
            >
              <template #default="{ row }">
                <el-tag>{{ row.category }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="title" label="Title" />
            <el-table-column prop="price" label="Price" width="150" />
            <el-table-column label="Operations" width="150">
              <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                  Edit
                </el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >
                  Delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { dummyProducts } from '@/models/constant'
import type { ProductTypes } from '@/models/types'
import type { TableColumnCtx } from 'element-plus/lib'

const handleEdit = (index: number, row: ProductTypes) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: ProductTypes) => {
  console.log(index, row)
}

const filterHandler = (value: string, row: ProductTypes, column: TableColumnCtx<ProductTypes>) => {
  const property = column['property'] as keyof ProductTypes
  return row[property] === value
}
</script>

<style scoped>
.el-aside {
  background: var(--custom-black);
  color: var(--custom-off-white);
}

.el-table {
  border-radius: 4px;
  height: 100%;
}

.el-table {
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.12);
}
</style>
