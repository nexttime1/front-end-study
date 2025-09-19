const h = "hello world";
console.log(h);
console.log("xtm");
let num1 = 1;
let num2 = 1.5;
let num3 = 0x789;
num1 = num2;
let s1 = "你好";
let a1 = { value: "111" }; // 初始化为对象
a1.value = 1; // 修改对象的属性
a1.name = "xtm"; // 给对象添加name属性
console.log(a1); // { value: 1, name: 'xtm' }
let n1 = null;
let u1 = undefined;
function input(msg) {
}
let n = "111";
n = 1;
n = null;
//  联合类型  
// let div:HTMLElement|null  = document.getElementById("#div")
function add(num) {
    return 1;
}
add("111");
add(222);
//类型断言
// let img1 = document.getElementById("#img") as HTMLImageElement
// img1.src = "http://xxx/img"
// let img2 = <HTMLImageElement>document.getElementById("#img") 
// img2.src = "http://xxx/iag"
// 数组类型
let b1 = ["1", "2"];
let b2 = ["1", 2, true];
let b3 = [true, false];
//  元组    制定规律
let b4 = [1, 23];
console.log(b4[0]); // 防止越界
let b5 = [2334, "nihao", false];
//多维数组
let arr1 = [[1, 2], [33, 22]];
let zhangsan = {
    id: 1,
    name: "张三",
    getName: function () {
        return this.name;
    },
    setAge: function (age) {
        this.age = age;
    }
};
let ss1 = {
    gender: 1
};
let ss2 = {
    name: "xtm",
    gender: 1
};
let m1 = "xtm";
let m2 = ["xtm", "kkk"];
let zhang = {
    id: 1,
    name: "stt",
};
let f1 = (name, age) => {
    return "xtm";
};
let f2 = function (name, age) {
    return "xtm";
};
let C = {
    name: "xtm",
    age: 1
};
export {};
//# sourceMappingURL=hello_world.js.map