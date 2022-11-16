/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from 'components/ui'
import { useOptions } from 'context'
import React, { useEffect } from 'react'

interface Props {
  defaultLocation: string
  locations: { id: string; name: string }[]
}

export function SelectLocation({ locations, defaultLocation }: Props) {
  const { locationId, changeLocation } = useOptions()

  useEffect(() => {
    if (!locationId) changeLocation(defaultLocation)
  }, [])

  return (
    <Select
      options={locations}
      selected={locationId}
      label="Select Location"
      onSelectOption={changeLocation}
    />
  )
}
