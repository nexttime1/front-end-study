<template>
  <div class="btn">
    <button @click="add">++</button>
    <span>当前值：{{ number }}</span>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

interface Props {
  num ?: number    // ? 可选参数
}
//接参数   设置默认值
const props = withDefaults(defineProps<Props>(), {
  num : 1,
})
//点击之后通知 父
const emits = defineEmits<Emits>() 

interface Emits {
(e:"plus", num : number , msg : string): void

}



const number = ref(0)

function add() {
 number.value += props.num
 emits("plus", number.value, "我被点击了")
}
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
}
</style>