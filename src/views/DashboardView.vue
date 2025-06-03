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
      <el-main style="">
        <el-row :gutter="24" align="middle" justify="space-between" style="height: 200px">
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
          <el-col :span="8" style="width: 100%; height: 100%">
            <el-card style="width: 100%; height: 100%">
              <el-text>CARD</el-text>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 1em; height: 100%">
          <el-table :data="tableData">
            <el-table-column type="index" width="50" />
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped>
.el-aside {
  background: var(--custom-black);
  color: var(--custom-off-white);
}

.el-table {
  border-radius: 15px;
  height: 100%;
}

/* .el-table {
  --el-table-tr-bg-color: none;
  --el-table-bg-color: none;
} */
</style>
