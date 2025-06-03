<template>
  <el-container>
    <el-row>
      <el-col style="background-color: black">
        <el-text style="color: white; display: flex; justify-content: center"
          >50% Discount Today!!
        </el-text>
      </el-col>
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

    <el-row style="width: 100%; height: 800px; padding: 1em; justify-content: center">
      <el-col
        style="height: 100%; width: 100%; background-color: aqua; border-radius: 15px"
        :span="14"
      >
      </el-col>

      <el-col style="width: 100%; height: 100%; padding-left: 1em" :span="10">
        <el-row style="height: 100%">
          <el-col
            :span="11"
            style="background-color: black; height: 50%; border-radius: 15px"
          ></el-col>
          <el-col
            :span="11"
            style="background-color: blue; height: 50%; margin-left: 1em; border-radius: 15px"
          ></el-col>
          <el-col
            :span="23"
            style="background-color: black; height: 50%; margin-top: 1em; border-radius: 15px"
          ></el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.el-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.logInSignUpCon {
  display: flex;
  float: right;
  height: 60px;
  width: 10%;
  border-radius: 100px;
  background-color: #dfdfdf;
}
</style>
