
//export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
//export type Visibility = "great" | "bad" | "poor"

export enum Weather {
    Sunny = "sunny",
    Rainy = "rainy",
    Cloudy = "cloudy",
    Windy = "windy",
    Stormy = "stormy"
}

export enum Visibility {
    Great = "great",
    Bad = "bad",
    Poor = "poor"
}


export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">

export type NewDiaryEntry = Omit<DiaryEntry, "id">