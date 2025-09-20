<script setup lang="ts">
import axios from "axios";

axios.get("/users", {
  baseURL: "http://localhost:3000", // 设置绝对地址
  transformRequest: [function (data, headers) {
    console.log("transformRequest", data, headers)
    return data
  }], // 可以在这里处理请求的数据
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理
    // console.log("transformResponse", data)
    return JSON.parse(data);
  }],
  headers: {'Content-Type': 'application/json', "xxx": "xxx"},
  params: {
    xxx123: "xxx123"
  },
  timeout: 130, // 超时时间 单位毫秒  默认0 不超时
  auth: {
    username: 'root',
    password: 'root'
  },
  responseType: 'json', // 默认值
  
  
}).then(res => {
  console.log(res.data)
})


</script>