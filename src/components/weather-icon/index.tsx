import { Skeleton } from 'components/skeleton'
import React, { useState } from 'react'

const ICON_URL = 'https://openweathermap.org/img/wn/'
const ICON_SUFFIX = '@2x.png'

export interface WeatherIconProps {
  icon: string
  description: string
}

export function WeatherIcon({ icon, description }: WeatherIconProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const onLoad = () => setIsLoaded(true)

  const iconSrc = `${ICON_URL}${icon}${ICON_SUFFIX}`

  return (
    <>
      <img
        width={72}
        height={72}
        src={iconSrc}
        alt={description}
        onLoad={onLoad}
        hidden={!isLoaded}
      />
      {!isLoaded ? <Skeleton width={72} height={72} /> : null}
    </>
  )
}
