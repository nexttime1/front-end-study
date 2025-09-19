let date = new Date();
let regex = /12/;
let regex1 = new RegExp(/\s+/);
let err = new Error("123");
fetch("./data.json").then((response) => response.json()). //将响应转换为JSON格式
    then((res) => {
    // 获取页面中id为"app"的元素，并断言为HTMLDivElement（
    let app = document.getElementById("app");
    //遍历
    res.data.forEach((item) => {
        // 创建一个li元素
        let li = document.createElement("li");
        // 设置li的内容，显示name和age
        li.innerHTML = `
        <span>name: ${item.name}</span> <span style="margin-left: 10px">age:${item.age}</span>
        `;
        app.append(li);
    });
});
export {};
//# sourceMappingURL=%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1.js.map