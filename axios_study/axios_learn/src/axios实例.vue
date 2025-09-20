
<template>

</template>

<script setup lang="ts">
import axios from "axios";

const blogServerUrl = "http://localhost:3000"
const videoServerUrl = "http://localhost:3001"


const blogAxios = axios.create({
  baseURL: blogServerUrl,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 1000,
})

const videoAxios = axios.create({
  baseURL: videoServerUrl,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 1000
})

blogAxios.get("users").then(res => {
  console.log("博客服务", res.data)
})

videoAxios.get("users").then(res => {
  console.log("视频服务", res.data)
})


</script>