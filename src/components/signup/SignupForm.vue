<template>
  <el-text style="font-size: 40px" class="poppins-bold">Create your account</el-text>
  <el-form
    ref="signupFormRef"
    :model="signupForm"
    :rules="rules"
    style="width: 600px"
    @submit.prevent="onSubmit"
  >
    <el-form-item label="First Name" prop="firstname" label-position="top">
      <el-input v-model="signupForm.firstname" size="large" />
    </el-form-item>
    <el-form-item label="Last Name" prop="lastname" label-position="top">
      <el-input v-model="signupForm.lastname" size="large" />
    </el-form-item>
    <el-form-item label="Email" prop="email" label-position="top">
      <el-input v-model="signupForm.email" size="large" />
    </el-form-item>
    <el-form-item label="Password" prop="password" label-position="top">
      <el-input type="password" v-model="signupForm.password" size="large" />
    </el-form-item>
    <el-form-item label="Address" prop="address" label-position="top">
      <el-input v-model="signupForm.address" size="large" />
    </el-form-item>
    <el-form-item label="Phone" prop="phone" label-position="top">
      <el-input v-model="signupForm.phone" size="large" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="large" style="width: 100%" @click="onSubmit">Sign Up</el-button>
    </el-form-item>
    <el-form-item style="justify-content: center; display: flex">
      <span>Already have an account?</span>
      <el-button type="text" @click="goToLogin" style="margin-left: 5px;">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { SignupTypes } from '@/models/types'
import { useUserStore } from '@/stores/userStore'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const signupFormRef = ref<FormInstance>()
const signupForm = reactive<SignupTypes>({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  address: '',
  phone: '',
})

const rules = reactive<FormRules<SignupTypes>>({
  firstname: [{ required: true, message: 'Please input first name', trigger: 'blur' }],
  lastname: [{ required: true, message: 'Please input last name', trigger: 'blur' }],
  email: [{ type: 'email', required: true, message: 'Please input email', trigger: 'blur' }],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 6, max: 20, message: 'Length should be 6 to 20', trigger: 'blur' },
  ],
  address: [{ required: true, message: 'Please input address', trigger: 'blur' }],
  phone: [{ required: true, message: 'Please input phone', trigger: 'blur' }],
})

const onSubmit = () => {
  signupFormRef.value?.validate((valid) => {
    if (valid) {
      userStore.signup({ ...signupForm })
      // Optionally, redirect to login or home
      router.push({ name: 'login' })
    }
  })
}

const goToLogin = () => {
  router.push({ name: 'login' })
}
</script>

<style scoped></style>