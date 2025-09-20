const dr: ClassDecorator = (fn) => {
    // fn就是Animal的构造函数
    console.log(fn)
    // 可以给对象挂载属性和方法
    fn.prototype.myName = "枫枫"
    fn.prototype.getMyName = function () {
        console.log(fn.prototype.myName)
    }
}

@dr
class Animal {

}


let an = new Animal()
console.log((an as any).myName);
(an as any).getMyName()



// 带参数 

const big =  (name: string):ClassDecorator=>{
    return (fn)=>{
        fn.prototype.myName = name
        fn.prototype.getMyName = function () {
            console.log(fn.prototype.myName)
        }
    }
}


@big("zhangsan")
class AnimalNew {

}


let an1 = new AnimalNew()

console.log((an1 as any).myName);
(an1 as any).getMyName()






