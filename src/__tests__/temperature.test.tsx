import { Temperature } from 'components/temperature'
import {
  CelsiusScale,
  FahrenheitScale,
  TempScale
} from 'config/temperature-scale'
import { OptionsContext } from 'context'
import React from 'react'
import { localizeTemperature, render, screen } from 'utils'

describe('<Temperature />', () => {
  it('should render temperature converted to Celsius scale', () => {
    renderWithScaleContext(<Temperature temp={273} />, CelsiusScale)

    expect(
      screen.getByRole('heading', {
        name: localizeTemperature(0, CelsiusScale.type)
      })
    ).toBeDefined()
  })

  it('should render temperature converted to Fahrenheit scale', () => {
    renderWithScaleContext(<Temperature temp={373} />, FahrenheitScale)

    expect(
      screen.getByRole('heading', {
        name: localizeTemperature(212, FahrenheitScale.type)
      })
    ).toBeDefined()
  })
})

const mockContextValue = {
  locationId: '',
  changeLocation: jest.fn(),
  changeScale: jest.fn()
}

function renderWithScaleContext(ui: React.ReactElement, scale: TempScale) {
  return render(
    <OptionsContext.Provider
      value={{ ...mockContextValue, temperatureScale: scale }}
    >
      {ui}
    </OptionsContext.Provider>
  )
}
