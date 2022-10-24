import React from 'react'

const ICON_URL = 'http://openweathermap.org/img/wn/'
const ICON_SUFFIX = '@2x.png'

export interface WeatherIconProps {
  icon: string
  description: string
}

export function WeatherIcon({ icon, description }: WeatherIconProps) {
  const iconSrc = `${ICON_URL}${icon}${ICON_SUFFIX}`

  return <img src={iconSrc} alt={description} width={72} height={72} />
}
