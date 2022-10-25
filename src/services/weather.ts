import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const API_URL = process.env.REACT_APP_API_URL || ''

export const fetchWeatherConditions = async (locationId: string) => {
  const response = await axios.get(`${API_URL}/weather`, {
    params: { id: locationId, appid: API_KEY }
  })

  return response.data
}
