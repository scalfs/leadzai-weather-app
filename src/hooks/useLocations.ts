import { useOptions } from 'context'
import { locations } from 'data'

interface Return {
  locationId: string
  changeLocation: (id: string) => void
  locations: { title: string; data: { id: string; name: string }[] }[]
}

export function useLocations(): Return {
  const { locationId, changeLocation } = useOptions()

  const sections = Object.entries(locations).map(([country, cities]) => ({
    title: country,
    data: cities
  }))

  return { locationId, changeLocation, locations: sections }
}
