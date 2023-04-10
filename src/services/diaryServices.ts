import diaryData from "./diaries.json"
import { DiaryEntry, NonSensitiveInfoDiaryEntry} from '../types';


const diaries: Array<DiaryEntry> = diaryData as unknown as Array<DiaryEntry>
// "Array<DiaryEntry>" might be "DiaryEntry[]" as well

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined =>{
    const entry = diaries.find(el => el.id === id)

    if(entry != null ){
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }

    return undefined
    
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    }) 
}

export const addEntry = () => null