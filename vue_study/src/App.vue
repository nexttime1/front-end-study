<template>
<div v-if="show">显示</div>
<button @click="show = !show">按钮</button>
<div v-for="(item, index) in list" :key = "item">
    {{ index }}{{ item }}

  <div><input placeholder="请输入内容" @keydown.enter= "add"></div>
</div>


</template>



<script setup lang="ts">
import {reactive,ref} from "vue";
let show = ref(true)
const list = ref(["小宋","小雪","小二"])
function add (e) {
  console.log(e)
}
</script>
<style scoped></style>
