import { Text } from 'components/ui'
import React from 'react'
import { capitalize, formatFromUnixTime } from 'utils'

export interface EventProps {
  event: 'sunrise' | 'sunset'
  time: number
}

export function SolarEvent({ event, time }: EventProps) {
  return (
    <Text>
      {capitalize(event)}: {formatFromUnixTime(time)}
    </Text>
  )
}
