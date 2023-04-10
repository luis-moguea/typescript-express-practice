import express from "express"
import * as diaryServices from "../services/diaryServices"

const router = express.Router()

router.get("/api", (_req, res)=>{
    res.send(diaryServices.getEntries())
})

router.get("/api/:id", (req, res)=>{
    const diary = diaryServices.findById(parseInt(req.params.id))
    res.send(diary)
})

router.post("/", (_req, res)=>{
    res.send("new diary")
})

export default router