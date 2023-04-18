import express from "express"
import * as diaryServices from "../services/diaryServices"
import toNewDiaryEntry from '../utils';


const router = express.Router()

router.get("/api/diaries", (_req, res)=>{
    res.send(diaryServices.getEntries())
})

router.get("/api/:id", (req, res)=>{
    const diary = diaryServices.findById(parseInt(req.params.id))
    res.send(diary)
})

router.post("/api/diaries", (req, res)=>{
    try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.send(addedDiaryEntry)

    } catch (err: any) {
        res.status(400).send(err.message)
    }
})

export default router