import { get } from './api'

const API_KEY = process.env.REACT_APP_API_KEY

export interface WeatherData {
  timezone: number
  main: { temp: number }
  weather: { description: string; icon: string }[]
  sys: { sunrise: number; sunset: number }
}

export const fetchWeatherConditions = async (locationId: string) => {
  return await get<WeatherData>(`weather/?appid=${API_KEY}&id=${locationId}`)
}
