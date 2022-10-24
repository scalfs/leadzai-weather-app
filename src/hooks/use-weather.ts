import { useQuery } from '@tanstack/react-query'
import { fetchWeatherConditions } from 'services/weather'

export function useWeather(locationId: string) {
  return useQuery(
    ['weather', locationId],
    () => fetchWeatherConditions(locationId),
    { cacheTime: 10 * 60 * 1000, select: transformData }
  )
}

interface ApiData {
  timezone: number
  main: { temp: number }
  weather: { description: string; icon: string }[]
  sys: { sunrise: number; sunset: number }
}

function transformData(data: ApiData) {
  return {
    temperature: data.main.temp,
    weatherIcon: data.weather[0].icon,
    weatherDesc: data.weather[0].description,
    sunriseTime: (data.sys.sunrise + data.timezone) * 1000,
    sunsetTime: (data.sys.sunset + data.timezone) * 1000
  }
}
