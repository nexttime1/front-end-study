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

//  联合类型  
// let div:HTMLElement|null  = document.getElementById("#div")

function add(num : number|string) :number {
    return 1
}


add("111")
add(222)

//类型断言
// let img1 = document.getElementById("#img") as HTMLImageElement
// img1.src = "http://xxx/img"

// let img2 = <HTMLImageElement>document.getElementById("#img") 
// img2.src = "http://xxx/iag"

// 数组类型

let b1 :string[] = ["1","2"]

let b2 :any[] = ["1",2,true]

let b3 :boolean[] = [true, false]

//  元组    制定规律
let b4 :[number, number] = [1,23]
console.log(b4[0])    // 防止越界

let b5 :[number, string, boolean] = [2334,"nihao" , false]


//多维数组
let arr1 :number[][] = [[1,2],[33,22]]


//  接口

interface User {
    readonly id :number   //只能读  不可修改
    name: string
    age ?: number  //可选
    address ?: string
    getName: () => string
    setAge: (age: number) => void

}

let zhangsan : User = {
    id : 1 ,
    name : "张三",
    getName : function() {
        return this.name
    },
    setAge : function(age: number) {
        this.age = age
    }


}

//继承
interface People {
    gender : number
}

interface Student extends People {

}

let ss1 :Student = {
    gender: 1
} 

// 交叉类型    &

interface Graudent {
    name : string
}


let ss2: Student & Graudent = {
    name :  "xtm",
    gender : 1
}

// 类型别名

type MyType = string | string[]

let m1 : MyType = "xtm"

let m2 : MyType = ["xtm", "kkk"]



type InType =  {
    readonly id: number ,
    name : string,
    age ?: number
}


let zhang : InType = {
    id : 1,
    name : "stt",
}

type F1 =  (name : string, age : number) => string

let f1: F1 = (name: string , age : number) => {
    return "xtm"
}


let f2: F1 = function (name: string , age : number) {
    return "xtm"
}


// type 联合类型

type A = {
    name : string
}
type B = {
    age : number
}

let C : A & B = {
    name : "xtm",
    age : 1
}

