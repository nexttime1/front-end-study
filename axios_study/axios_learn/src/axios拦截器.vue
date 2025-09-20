<template>

</template>

<script setup lang="ts">
import axios from "axios";

const blogAxios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 1000,
})

// 请求中间件  添加在实例上 都行  
blogAxios.interceptors.request.use(function (config) {
  config.headers["token"] = "token123"
  config.baseURL = "http://localhost:3000"   //当成之前奖的config
  return config
})
// 响应中间件
blogAxios.interceptors.response.use(function (response){
  if (response.status === 200){
    // 还可以再这里全局判断这个请求是不是正常的
    return  response.data
  }
  console.log(response.statusText)
  return Promise.reject(response.statusText);
}, function (error){
  // 超出 2xx 范围的状态码都会触发该函数。 一般是后端服务出错了
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error);
})

blogAxios.get("users").then(res => {
  console.log("博客服务", res)
})


</script>