
<!--  then模式 处理错误-->
<script setup lang="ts">
import axios from "axios";

axios.get("http://localhost:30001/users").then(res => {
  console.log("博客服务", res)
}).catch(function (err) {
  console.log("出错了", err)
})
</script>

<!-- async模式 处理错误-->

<script setup lang="ts">
import axios from "axios";
async function getData(){
  try {
    let res = await axios.get("http://localhost:3000/users")
    console.log("博客服务", res)
  }catch (err){
    console.log("出错了", err)
  }
}
getData()
</script>