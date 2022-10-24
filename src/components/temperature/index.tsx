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
    <Heading size="xl" weight="bold" asChild>
      <h1>
        {Math.round(scaledTemp)} {temperatureScale.unit}
      </h1>
    </Heading>
  )
}
