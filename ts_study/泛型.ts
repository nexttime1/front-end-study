
function array<T>(a:T, b:T):T[]{
    return [a, b]
}


console.log(array(1,2))
console.log(array("1","5546"))
console.log(array(true, false))
console.log(array(null, null))

//多参数的形式

function arrayNew<T,K>(a:T, b:K):(T|K)[]{
    return [a, b]
}

console.log(arrayNew(1,"2"))
console.log(arrayNew<number, string>(1,"2"))


//泛型约束
function arrayLimit<T extends string|any[]>(a:T, b:T):T[]{
    console.log(a.length)
    return [a, b]
}

console.log(arrayLimit("12334","2"))
console.log(arrayLimit(["1", "33"],["2"]))


//接口泛型
interface Fun {
    (name: string):string
}

let fun:Fun = function (name:string):string{
    return ""
}

//接口函数的泛型

interface ArrType<T> {
    (a1: T,a2:T):T[]
}

let fun1:ArrType<string> = function (a1:string, a2:string):string[]{
    return [a1, a2]
}

//属性泛型

interface Info1<T> {
    like: T
}

let zhaoyun: Info1<string> = {
    like: "羽毛球"
}
let libai: Info1<string[]> = {
    like: ["羽毛球"]
}


// 泛型约束

interface Info2<T extends string|string[]> {
    like: T
}

let houzi: Info2<string> = {
    like: "羽毛球"
}
let lisi: Info2<string[]> = {
    like: ["羽毛球"]
}



//约束和继承在一块
type Message = {
    msg : string
}

interface Info3<T extends string|string[]> extends Message{
    like: T
}

let fenghuang: Info3<string> = {
    like : "111",
    msg : " 1222" 
}


// keyof 
interface Info {
    name: string
    age: number
}

let zhangsan:Info = {
    name:"zhangsan",
    age: 21
}

function getInfoValue(info:Info, key: keyof Info):void{
    console.log(info[key])
}

getInfoValue(zhangsan, "name")
getInfoValue(zhangsan, "age")
// getInfoValue(zhangsan, "age1") // 不满足keyof的校验，会报错





//在 GetValue 函数的基础上，实现将value返回
interface InfoNew {
    name : string
    age : number
}


function GetValue<T extends keyof InfoNew>(info: InfoNew , key: T):InfoNew[T] {
    return info[key]
}