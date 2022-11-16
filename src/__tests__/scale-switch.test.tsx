import '@testing-library/jest-dom/extend-expect'
import { ScaleSwitch } from 'components/scale-switch'
import { CelsiusScale, FahrenheitScale } from 'config/temperature-scale'
import React from 'react'
import { fireEvent, getTempUnit, render, screen } from 'utils'

describe('<ScaleSwitch />', () => {
  it('should check and uncheck when clicking the switch component and labels', async () => {
    render(<ScaleSwitch />)
    const input = screen.getByRole('switch')
    expect(input).not.toBeChecked()

    fireEvent.click(input)
    expect(input).toBeChecked()

    const celsiusLabel = screen.getByText(getTempUnit(CelsiusScale.type))
    fireEvent.click(celsiusLabel)
    expect(input).not.toBeChecked()

    const farenheitLabel = screen.getByText(getTempUnit(FahrenheitScale.type))
    fireEvent.click(farenheitLabel)
    expect(input).toBeChecked()
  })
})
