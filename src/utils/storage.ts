export const readFromStorage = <T>(key: string): T | null => {
  try {
    const value = window.sessionStorage.getItem(key)
    if (value) return JSON.parse(value)

    return null
  } catch (err) {
    console.warn(`Error reading session value with key “${key}”:`, err)
    return null
  }
}

export const writeToStorage = <T>(key: string, newValue: T) => {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(newValue))
  } catch (err) {
    console.warn(`Error setting session value with key “${key}”:`, err)
  }
}
