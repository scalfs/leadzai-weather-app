import { Heading } from 'components/heading'
import React from 'react'

export interface TemperatureProps {
  temp: number
  unit: 'C' | 'F'
}

export function Temperature({ temp, unit }: TemperatureProps) {
  return (
    <Heading size="xl">
      <h1>
        {temp} &#176;{unit}
      </h1>
    </Heading>
  )
}
