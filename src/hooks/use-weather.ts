import { useQuery } from '@tanstack/react-query'
import { fetchWeatherConditions, WeatherData } from 'services/weather'

export function useWeather(locationId: string) {
  return useQuery(
    ['weather', locationId],
    () => fetchWeatherConditions(locationId),
    { cacheTime: 10 * 60 * 1000, select: transformData, enabled: !!locationId }
  )
}

function transformData(data: WeatherData) {
  return {
    temperature: data.main.temp,
    weatherIcon: data.weather[0].icon,
    weatherDesc: data.weather[0].description,
    sunriseTime: (data.sys.sunrise + data.timezone) * 1000,
    sunsetTime: (data.sys.sunset + data.timezone) * 1000
  }
}
