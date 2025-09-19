function add1(n1, n2) {
    return n1 + n2;
}
let add2 = (n1, n2) => {
    return n1 + n2;
};
//可选参数
function add(n1, n2) {
    if (typeof n2 === "undefined") {
        return n1;
    }
    return n1 + n2;
}
// 要么不传，要么传正确的类型
add(1);
add(1, 2);
// add(1, "3") // 报错
function add_new(n1, n2 = 10) {
    return n1 + n2;
}
function getUserList(params) {
    console.log(params.limit); // 有类型提示
}
function addFn(n1, n2 = 10) {
    return n1 + n2;
}
console.log(addFn(1));
console.log(addFn(1, 20));
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Black"] = 3] = "Black";
})(Color || (Color = {}));
let y1 = Color.Black;
let c1 = {
    color: Color.Red, // 这个color只能是Color里面的值
    blue: Color.Blue, // blue就只能写 Color.Blue
};
export {};
//# sourceMappingURL=function.js.map