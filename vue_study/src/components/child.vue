<template>
<div> 孙组件 </div>
<slot>默认卡槽</slot>
<slot name="xtm" age="23" address = "taian">具体替换哪一个</slot>
</template>

<script lang="ts" setup>
import { provide } from 'vue';

provide("msg111", "hello")

</script>

<style scoped>

</style>