<template>
  <div>
    <input type="file" name="file" id="upload" @change="upload">
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

function upload(e: Event) {

  const target = e.target;
  if (target instanceof HTMLInputElement) {
    const files = target.files;
    if (files) {
      const formData = new FormData()
      for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i])
      }
      axios.post("http://localhost:8080/upload", formData, {headers: {token: "xxx"}}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>