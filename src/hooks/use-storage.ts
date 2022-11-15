/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'

export function useSessionStorage<T>(
  key: string,
  defaultValue: T
): [T, (newValue: T) => void] {
  const readValue = useCallback(() => {
    try {
      const value = window.sessionStorage.getItem(key)
      if (value) return JSON.parse(value)

      return defaultValue
    } catch (err) {
      console.warn(`Error reading session value with key “${key}”:`, err)
      return defaultValue
    }
  }, [key])

  const [storedValue, setStoredValue] = useState(readValue)

  const setValue = useCallback(
    (newValue: T) => {
      try {
        window.sessionStorage.setItem(key, JSON.stringify(newValue))
      } catch (err) {
        console.warn(`Error setting session value with key “${key}”:`, err)
      } finally {
        setStoredValue(newValue)
      }
    },
    [key]
  )

  useEffect(() => {
    setStoredValue(readValue())
  }, [readValue])

  return [storedValue, setValue]
}
