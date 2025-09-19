let date: Date = new Date()
let regex: RegExp = /12/
let regex1: RegExp = new RegExp(/\s+/)
let err: Error = new Error("123")


// 使用feach 获取json文件并显示
interface dataType {
    name: string
    age: number
}

interface responseType<T> {
    code: number
    data: T[]
    msg: string
}


fetch("/data.json").then((response: Response) => response.json()).   //将响应转换为JSON格式
then((res: responseType<dataType>) => {   //指定类型为responseType<dataType>
    // 获取页面中id为"app"的元素，并断言为HTMLDivElement（
    let app = document.getElementById("app") as HTMLDivElement
    //遍历
    res.data.forEach((item: dataType) => {
        // 创建一个li元素
        let li = document.createElement("li");
        // 设置li的内容，显示name和age
        li.innerHTML = `
        <span>name: ${item.name}</span> <span style="margin-left: 10px">age:${item.age}</span>
        `
        app.append(li)
    })
})