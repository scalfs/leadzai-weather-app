import { Heading } from 'components/ui'
import { useOptions } from 'context'
import React from 'react'
import { localizeTemperature } from 'utils'

export interface TemperatureProps {
  temp: number
}

export function Temperature({ temp }: TemperatureProps) {
  const { temperatureScale } = useOptions()

  const scaledTemp = temperatureScale.convertFromKelvin(temp)

  return (
    <Heading size="xl" weight="bold" asChild>
      <h1>{localizeTemperature(scaledTemp, temperatureScale.type)}</h1>
    </Heading>
  )
}
