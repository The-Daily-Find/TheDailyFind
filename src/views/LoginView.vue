<template>
  <el-container style="width: 100%; height: 100vh">
    <el-header style="height: 60px; background: var(--custom-black)"> </el-header>
    <el-container style="padding: 1em">
      <el-container style="padding: 1em">
        <el-header style="height: fit-content">
          <el-row align="middle" justify="space-between" style="height: 100%">
            <el-text
              size="large"
              style="color: var(--custom-black); font-size: 34px; font-weight: bold"
              >The Daily Find</el-text
            >
            <el-button size="large" class="btn">Login account</el-button>
          </el-row>
        </el-header>
        <el-main
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
        >
          <LoginForm />
        </el-main>
      </el-container>
      <el-aside style="width: 500px; background: var(--custom-black); border-radius: 15px">
        <el-text>aside</el-text>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LoginForm from '@/components/login/LoginForm.vue'
</script>

<style scoped>
.btn {
  padding: 1em 2em;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: var(--custom-black);
}
</style>
