import express from "express"

const app = express()

const router = express.Router()

app.use("/", router)

router.get("/", (req:any, res:any) => {
    res.json({msg: "hi fengfeng",code: 200})
})

app.listen(9000, () => {
    console.log("server: http://127.0.0.1:9000")
})