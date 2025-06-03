<template>
  <el-text style="font-size: 40px" class="poppins-bold">Login your account</el-text>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rule" style="width: 600px">
    <el-form-item label="Email" prop="email" label-position="top">
      <el-input v-model="ruleForm.email" size="large" />
    </el-form-item>
    <el-form-item label="Password" prop="password" label-position="top">
      <el-input type="password" v-model="ruleForm.password" size="large" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { LoginTypes } from '@/models/types'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<LoginTypes>({
  email: '',
  password: '',
})
const rule = reactive<FormRules<LoginTypes>>({
  email: [{ type: 'email', required: true, message: 'Please input email', trigger: 'blur' }],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 6, max: 20, message: 'Length should be 6 to 20', trigger: 'blur' },
  ],
})
</script>

<style scoped></style>
