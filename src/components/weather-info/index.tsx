import { Skeleton } from 'components/skeleton'
import { SolarEvent } from 'components/solar-event'
import { Temperature } from 'components/temperature'
import { WeatherIcon } from 'components/weather-icon'
import { useOptions } from 'context'
import { useWeather } from 'hooks'
import React from 'react'
import styled, { css } from 'styled-components'

export function WeatherInfo() {
  const { locationId } = useOptions()
  const { data, isLoading } = useWeather(locationId)

  if (isLoading || !data) return <LoadingState />

  const { temperature, weatherIcon, weatherDesc, sunriseTime, sunsetTime } =
    data

  return (
    <Wrapper>
      <Temperature temp={temperature} />
      <WeatherIcon icon={weatherIcon} description={weatherDesc} />

      <EventsRow>
        <SolarEvent event="sunrise" time={sunriseTime} />
        <SolarEvent event="sunset" time={sunsetTime} />
      </EventsRow>
    </Wrapper>
  )
}

function LoadingState() {
  return (
    <LoadingWrapper>
      <Skeleton height={85} width={172} />
      <Skeleton height={72} width={72} />

      <EventsRow>
        <Skeleton height={19} width={107} />
        <Skeleton height={19} width={107} />
      </EventsRow>
    </LoadingWrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.md};

    animation: opacity 0.5s ease-in;
    @keyframes opacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`

const EventsRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.md};
    margin: ${theme.spacings.md} auto;
  `}
`

const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`
