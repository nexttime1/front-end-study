const h : string = "hello world"
console.log(h)

console.log("xtm")


let num1: number = 1
let num2: number = 1.5
let num3: number = 0x789

num1 = num2

let s1: string = "你好"

let a1: any = { value: "111" }  // 初始化为对象
a1.value = 1                    // 修改对象的属性
a1.name = "xtm"                 // 给对象添加name属性

console.log(a1)  // { value: 1, name: 'xtm' }


let n1: null = null
let u1: undefined = undefined

function input(msg:string):void {

}

let n: unknown = "111"
n = 1
n = null

