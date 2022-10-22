import React from 'react'
import { capitalize } from 'utils'

const locations = {
  brazil: { 'vila velha': { name: 'Vila Velha', id: 3445026 } },
  portugal: {
    lisbon: { name: 'Lisbon', id: 2267057 },
    braga: { name: 'Braga', id: 2742032 }
  }
}

export function Dropdown() {
  return (
    <select name="locations" id="locations">
      {Object.entries(locations).map(([country, cities]) => (
        <optgroup label={capitalize(country)} key={country}>
          {Object.values(cities).map((city) => (
            <option value={city.id} key={city.id}>
              {city.name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  )
}
