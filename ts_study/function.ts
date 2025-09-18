function add1(n1:number, n2:number):number{
    return n1 + n2
}

let add2 = (n1:number, n2:number):number=>{
    return n1+n2
}


//可选参数

function add(n1:number, n2?:number):number{
    if (typeof n2 === "undefined"){
        return n1
    }
    return n1 + (n2 as number)
}

// 要么不传，要么传正确的类型
add(1)
add(1, 2)
// add(1, "3") // 报错

function add_new(n1:number, n2:number = 10):number{
    return n1 + n2

}

//参数为接口

interface getUserListRequest {
    page?:number
    limit?:number
    key?:string
    name?:string
}

function getUserList(params:getUserListRequest){
    console.log(params.limit) // 有类型提示
}

//重载
function addFn(n1:number, n2:number):number

function addFn(n1:number):number

function addFn(n1:number, n2:number = 10):number{
    return n1 + n2
}

console.log(addFn(1))
console.log(addFn(1, 20))


//枚举

enum Color {
    Red = 1 ,
    Blue = 2,
    Black

}

let y1:Color = Color.Black


interface ColorInter {
    color: Color,
    blue: Color.Blue
}


let c1: ColorInter = {
    color: Color.Red, // 这个color只能是Color里面的值
    blue: Color.Blue, // blue就只能写 Color.Blue
}

