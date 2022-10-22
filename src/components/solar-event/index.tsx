import { Text } from 'components/text'
import React from 'react'
import { capitalize } from 'utils'

export interface EventProps {
  event: 'sunrise' | 'sunset'
  time: number
}

export function SolarEvent({ event, time }: EventProps) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    timeZone: 'Europe/Lisbon'
  })

  return (
    <Text>
      {capitalize(event)}: {formatter.format(new Date(time))}
    </Text>
  )
}
