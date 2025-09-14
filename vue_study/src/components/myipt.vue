<template>
<div>
<span>{{ props.modelValue }}</span>
<input type="text" :value = "props.modelValue" @input = "input">
</div>
</template>


<script lang="ts" setup>
const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])

function input (e:Event) : void {
 const val = (e.target as HTMLInputElement).value
 emit("update:modelValue",val)
}


</script>


<style scoped>

    
</style>