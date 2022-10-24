import { Skeleton } from 'components/skeleton'
import { SolarEvent } from 'components/solar-event'
import { Temperature } from 'components/temperature'
import { WeatherIcon } from 'components/weather-icon'
import { useOptions } from 'context'
import { useWeather } from 'hooks'
import React from 'react'
import * as S from './styles'

export function WeatherInfo() {
  const { locationId } = useOptions()
  const { data, isLoading } = useWeather(locationId)

  if (isLoading || !data) return <LoadingState />

  const { temperature, weatherIcon, weatherDesc, sunriseTime, sunsetTime } =
    data

  return (
    <S.Wrapper>
      <S.WeatherInfo>
        <Temperature temp={temperature} />
        <WeatherIcon icon={weatherIcon} description={weatherDesc} />
      </S.WeatherInfo>

      <S.EventsRow>
        <SolarEvent event="sunrise" time={sunriseTime} />
        <SolarEvent event="sunset" time={sunsetTime} />
      </S.EventsRow>
    </S.Wrapper>
  )
}

function LoadingState() {
  return (
    <>
      <S.WeatherInfo>
        <Skeleton height={85} width={172} />
        <Skeleton height={72} width={72} />
      </S.WeatherInfo>

      <S.EventsRow>
        <Skeleton height={19} width={107} />
        <Skeleton height={19} width={107} />
      </S.EventsRow>
    </>
  )
}
