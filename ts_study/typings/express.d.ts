//TypeScript 本身不认识第三方库（比如 Express）的类型，需要通过 声明文件（.d.ts） 告诉 TS：这个库的变量 / 函数 / 类是什么类型
declare module "express" {
    interface Router {
        get(path: string, cb:(req:any, res:any)=>void):void
    }

    interface App {
        use(path: string, router: any): void
        listen(port: number, cb?:()=>void)
    }

    interface Express {
        (): App
        Router(): Router,
    }

    const express: Express
    export default express;
}