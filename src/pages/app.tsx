import { ScaleSwitch } from 'components/scale-switch'
import { SelectLocation } from 'components/select-location'
import { Header } from 'components/ui'
import { WeatherInfo } from 'components/weather-info'
import { defaultLocation, locations } from 'data'
import React from 'react'
import * as S from './styles'

export function App() {
  return (
    <>
      <Header title="Weather App" />

      <S.WeatherCard>
        <S.OptionsRow>
          <SelectLocation {...{ locations, defaultLocation }} />
          <ScaleSwitch />
        </S.OptionsRow>

        <WeatherInfo />
      </S.WeatherCard>
    </>
  )
}
