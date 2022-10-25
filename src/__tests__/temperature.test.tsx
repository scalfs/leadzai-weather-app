import { Temperature } from 'components/temperature'
import { CelsiusScale, FahrenheitScale } from 'config/temperature-scale'
import { OptionsContext } from 'context'
import React from 'react'
import { render, screen } from 'utils/test-utils'

const mockContextValue = {
  locationId: '',
  changeLocation: jest.fn(),
  changeScale: jest.fn()
}

describe('<Temperature />', () => {
  it('should render temperature converted to Celsius scale', () => {
    render(
      <OptionsContext.Provider
        value={{ ...mockContextValue, temperatureScale: CelsiusScale }}
      >
        <Temperature temp={273} />
      </OptionsContext.Provider>
    )

    expect(screen.getByRole('heading', { name: /0 ºC/ })).toBeDefined()
  })

  it('should render temperature converted to Fahrenheit scale', () => {
    render(
      <OptionsContext.Provider
        value={{ ...mockContextValue, temperatureScale: FahrenheitScale }}
      >
        <Temperature temp={373} />
      </OptionsContext.Provider>
    )

    expect(screen.getByRole('heading', { name: /212 ºF/ })).toBeDefined()
  })
})