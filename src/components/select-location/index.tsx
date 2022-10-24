/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from 'components/ui'
import { useOptions } from 'context'
import React, { useEffect } from 'react'

interface Props {
  defaultLocation: string
  locations: { [key: string]: { id: string; name: string }[] }
}

export function SelectLocation({ locations, defaultLocation }: Props) {
  const { locationId, changeLocation } = useOptions()

  const sections = Object.entries(locations).map(([country, cities]) => ({
    title: country,
    data: cities
  }))

  useEffect(() => {
    if (!locationId) changeLocation(defaultLocation)
  }, [])

  return (
    <Select
      label="select-location"
      sections={sections}
      selected={locationId}
      onChangeSelected={changeLocation}
    />
  )
}
