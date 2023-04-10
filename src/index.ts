import express from "express"
import diariesRouter from "./routes/diaries"

const app = express()

app.use(express.json())
app.use("/", diariesRouter)

const PORT = 3000

app.get("/ping", (_req, res) =>{
    console.log("someone pinged here " + new Date().toLocaleDateString())
    res.send("pong")
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})