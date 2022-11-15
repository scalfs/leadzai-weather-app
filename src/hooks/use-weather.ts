/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import { fetchWeatherConditions, WeatherData } from 'services/weather'
import { readFromStorage, writeToStorage } from 'utils/storage'
import { useFetch } from './use-fetch'

const CACHE_TIME = 10 * 60 * 1000

type CachedWeather = WeatherData & { updatedAt: number }

export function useWeather(locationId: string) {
  const key = `weather - ${locationId}`

  const fetchWeather = useCallback(async () => {
    const now = new Date().getTime()
    const cachedWeather = readFromStorage<CachedWeather>(key)

    if (cachedWeather) {
      const timeSinceLastUpdate = now - cachedWeather.updatedAt
      if (timeSinceLastUpdate < CACHE_TIME) return cachedWeather
    }

    const updatedWeather = await fetchWeatherConditions(locationId)
    writeToStorage(key, { ...updatedWeather, updatedAt: now })
    return updatedWeather
  }, [locationId])

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
