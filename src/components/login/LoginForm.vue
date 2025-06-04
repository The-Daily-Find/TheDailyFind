<template>
  <el-text style="font-size: 40px" class="poppins-bold">Login your account</el-text>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rule" style="width: 600px">
    <el-form-item label="Email" prop="email" label-position="top">
      <el-input v-model="ruleForm.email" size="large" />
    </el-form-item>
    <el-form-item label="Password" prop="password" label-position="top">
      <el-input type="password" v-model="ruleForm.password" size="large" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="large" style="width: 100%" @click="onLogin">Login</el-button>
    </el-form-item>
    <el-form-item v-if="loginError" style="color: red; justify-content: center;">
      Invalid email or password.
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { LoginTypes } from '@/models/types'
import { useUserStore } from '@/stores/userStore'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

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

const userStore = useUserStore()
const router = useRouter()
const loginError = ref(false)

const onLogin = () => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      const success = userStore.login(ruleForm.email, ruleForm.password)
      if (success) {
        loginError.value = false
        router.push({ name: 'home' })
      } else {
        loginError.value = true
      }
    }
  })
}
</script>

<style scoped></style>