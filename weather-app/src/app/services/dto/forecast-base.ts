import { ConditionDto } from "./condition";

export interface IForecastBaseDto
{
    temp_c: number
    temp_f: number
    is_day: boolean
    condition: ConditionDto
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    gust_mph: number
    gust_kph: number
    uv: number
}