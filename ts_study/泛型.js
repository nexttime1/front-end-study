function array(a, b) {
    return [a, b];
}
console.log(array(1, 2));
console.log(array("1", "5546"));
console.log(array(true, false));
console.log(array(null, null));
//多参数的形式
function arrayNew(a, b) {
    return [a, b];
}
console.log(arrayNew(1, "2"));
console.log(arrayNew(1, "2"));
//泛型约束
function arrayLimit(a, b) {
    console.log(a.length);
    return [a, b];
}
console.log(arrayLimit("12334", "2"));
console.log(arrayLimit(["1", "33"], ["2"]));
let fun = function (name) {
    return "";
};
let fun1 = function (a1, a2) {
    return [a1, a2];
};
let zhaoyun = {
    like: "羽毛球"
};
let libai = {
    like: ["羽毛球"]
};
let houzi = {
    like: "羽毛球"
};
let lisi = {
    like: ["羽毛球"]
};
let fenghuang = {
    like: "111",
    msg: " 1222"
};
let zhangsan = {
    name: "zhangsan",
    age: 21
};
function getInfoValue(info, key) {
    console.log(info[key]);
}
getInfoValue(zhangsan, "name");
getInfoValue(zhangsan, "age");
function GetValue(info, key) {
    return info[key];
}
export {};
//# sourceMappingURL=%E6%B3%9B%E5%9E%8B.js.map