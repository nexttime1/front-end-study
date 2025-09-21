

<template>
  <div>
    <button @click="download">下载文件</button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

function download() {
  axios.get("http://localhost:8080/download", {
    responseType: 'blob',
  }).then(res => {
    console.log(res.headers)
    if (res && res.status === 200) {
      const {data, headers} = res
      // 解析文件名
      let fileName = decodeURIComponent(headers["filename"])

      // 此处当返回json文件时需要先对data进行JSON.stringify处理，其他类型文件不用做处理  生成链接
      const blob = new Blob([data], {type: headers['Content-Type'] as string})

      // 创建a标签
      let dom = document.createElement('a')
      let url = window.URL.createObjectURL(blob)
      dom.href = url
      dom.download = decodeURI(fileName)
      dom.style.display = 'none'
      document.body.appendChild(dom)
      dom.click()
      // 删除a标签
      if (dom.parentNode) {
        (dom.parentNode as Node).removeChild(dom);
      }
      window.URL.revokeObjectURL(url);
    }
  })
}
</script>




