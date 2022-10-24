import { Heading } from 'components/ui'
import { useOptions } from 'context'
import React from 'react'

export interface TemperatureProps {
  temp: number
}

export function Temperature({ temp }: TemperatureProps) {
  const { temperatureScale } = useOptions()

  const scaledTemp = temperatureScale.convertFromKelvin(temp)

  return (
    <Heading size="xl">
      <h1>
        {scaledTemp} {temperatureScale.unit}
      </h1>
    </Heading>
  )
}
