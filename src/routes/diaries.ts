import express from "express"
import * as diaryServices from "../services/diaryServices"


const router = express.Router()

router.get("/api/diaries", (_req, res)=>{
    res.send(diaryServices.getEntries())
})

router.get("/api/:id", (req, res)=>{
    const diary = diaryServices.findById(parseInt(req.params.id))
    res.send(diary)
})

router.post("/api/diaries", (req, res)=>{
    const { date, weather, visibility, comment} = req.body

    const newDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment
    })
    res.send(newDiaryEntry)
})

export default router