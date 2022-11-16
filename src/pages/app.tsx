import { ErrorBoundary } from 'components/error-boundary'
import { ScaleSwitch } from 'components/scale-switch'
import { SelectLocation } from 'components/select-location'
import { Header } from 'components/ui'
import { WeatherInfo } from 'components/weather-info'
import { defaultLocation, locations } from 'data'
import React from 'react'
import styled, { css } from 'styled-components'

export function App() {
  return (
    <>
      <Header title="Weather App" />

      <WeatherCard>
        <ErrorBoundary>
          <OptionsRow>
            <SelectLocation {...{ locations, defaultLocation }} />
            <ScaleSwitch />
          </OptionsRow>

          <WeatherInfo />
        </ErrorBoundary>
      </WeatherCard>
    </>
  )
}

const WeatherCard = styled.main`
  ${({ theme }) => css`
    margin: auto;
    display: flex;
    flex-direction: column;
    max-width: 32rem;
    gap: ${theme.spacings.xl};
    padding: ${theme.spacings.lg};
  `}
`

const OptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
