<template>
  <div v-if="show">显示</div>
  <button @click="show = !show">按钮</button>

  <div v-for="(index, item) in list" :key="item">
    {{ item }} {{ index }}  {{ msg }} 
  </div>

  <div>
    <child>
      <template #xtm="data">替换成xtm {{ data.age }}</template>
    </child>
    <input placeholder="请输入内容" @keydown.enter="add">
  </div>
  <!-- 使用注册的组件 -->
  <numberClick :num = "3" @plus = "plus"></numberClick>
  <myipt v-model = "ipt"></myipt>
</template>

<script>
import { ref } from "vue";
import numberClick from "@/components/numberClick.vue";
import child from "@/components/child.vue";
import myipt from "@/components/myipt.vue"
import { inject } from "vue";
export default {
  // 注册组件
  components: {
    numberClick,
    child,
    myipt
  },
  // 数据
  data() {
    return {
      message: "初始消息"
    }
  },

  // 方法
  methods: {
    updateMessage() {
      this.message = "更新后的消息";
    },
    plus(num, msg){
  console.log(num, msg)
} 
  },
  
  setup() {
    let show = ref(true);
    const list = ref(["小宋", "小雪", "小二"]);
    const msg = inject("msg111")
    const ipt = ref("你好")
    
    function add(e) {
      // 添加输入内容到列表
      if (e.target.value.trim()) {
        list.value.push(e.target.value.trim());
        e.target.value = ""; // 清空输入框
      }
    }
    
    // 必须返回才能在模板中使用
    return {
      show,
      list,
      msg,
      ipt,
      add
    }
  },

  // 生命周期钩子
  beforeCreate() {
    console.log("1. beforeCreate：实例刚创建，data和methods还未初始化");
    console.log("此时访问data：", this.message);
  },

  created() {
    console.log("2. created：实例创建完成，data和methods已初始化");
    console.log("此时访问data：", this.message);
  },

  beforeMount() {
    console.log("3. beforeMount：模板编译完成，等待挂载到DOM");
  },

  mounted() {
    console.log("4. mounted：组件已挂载到DOM");
  },

  beforeUpdate() {
    console.log("5. beforeUpdate：数据已更新，DOM尚未更新");
  },

  updated() {
    console.log("6. updated：数据更新且DOM已重新渲染");
  },

  beforeUnmount() {
    console.log("7. beforeUnmount：组件即将卸载");
  },

  unmounted() {
    console.log("8. unmounted：组件已完全卸载");
  }
};
</script>

<style scoped></style>
