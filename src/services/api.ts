const API_URL = process.env.REACT_APP_API_URL || ''

export async function get<T>(endpoint: string, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig
  }

  return window
    .fetch(`${API_URL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.ok) {
        const data: T = await response.json()
        return data
      } else {
        const errorMessage = await response.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
}
