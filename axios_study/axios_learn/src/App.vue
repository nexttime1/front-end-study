<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>用户名</th>
        <th>年龄</th>
        <th>地址</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data.list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.addr }}</td>
        <td>
          <button @click="detailData(item.id as number)">详情</button>
          <button @click="putData(item)">修改</button>
          <button @click="deleteData(item)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="create">新增一条</button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {reactive} from "vue";
import type {AxiosResponse} from "axios";

const url: string = "http://localhost:3000/users/"

interface jsonData {
  readonly id?: number
  name: string
  age: number
  addr?: string
}

interface Data {
  list: jsonData[]
}
// 响应式数据 所谓 “响应式”，就是当这个对象的属性发生变化时，Vue 会自动检测到变化，并触发使用该属性的组件重新渲染
const data = reactive<Data>({
  list: []
})

// 请求列表
async function getData() {
  let res: AxiosResponse<jsonData[]> = await axios.get(url)
  data.list = res.data
}

// 增加数据
async function create() {
  let body: jsonData = {
    name: "王五",
    age: 23,
    addr: "北京市",
  }
  let res = await axios.post(url, body)
  console.log("新增", res.data)
  getData()
}

// 修改数据 年龄++  名字+？
async function putData(item: jsonData){
  item.age ++
  item.name += "?"
  let res = await axios.put(url + item.id, item)
  console.log("修改", res.data)

}

// 删除数据
async function deleteData(item: jsonData){
  let res = await axios.delete(url + item.id)
  console.log("删除", res.data)
  getData()
}

// 获取详情
async function detailData(id: number){
  let res = await axios.get(url + id)
  console.log("详情", res.data)
}


getData()


</script>