import { useCallback } from 'react'
import { fetchWeatherConditions, WeatherData } from 'services/weather'
import { useFetch } from './use-fetch'
import { useSessionStorage } from './use-storage'

const CACHE_TIME = 10 * 60 * 1000

type CachedWeather = WeatherData & { updatedAt: number }

export function useWeather(locationId: string) {
  const [storedWeather, writeToCache] = useSessionStorage<CachedWeather>(
    `weather - ${locationId}`,
    {} as CachedWeather
  )

  const fetchWeather = useCallback(async () => {
    const now = new Date().getTime()
    if (storedWeather.updatedAt) {
      const timeSinceLastUpdate = now - storedWeather.updatedAt
      if (timeSinceLastUpdate < CACHE_TIME) return storedWeather
    }

    const updatedWeather = await fetchWeatherConditions(locationId)
    writeToCache({ ...updatedWeather, updatedAt: now })
    return updatedWeather
  }, [locationId, storedWeather, writeToCache])

  return useFetch(fetchWeather, { enabled: !!locationId })
}

export function transformWeatherData(data: WeatherData) {
  return {
    temperature: data.main.temp,
    weatherIcon: data.weather[0].icon,
    weatherDesc: data.weather[0].description,
    sunriseTime: (data.sys.sunrise + data.timezone) * 1000,
    sunsetTime: (data.sys.sunset + data.timezone) * 1000
  }
}
