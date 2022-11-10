import { SolarEvent } from 'components/solar-event'
import React from 'react'
import { render, screen } from 'utils'

describe('<SolarEvent />', () => {
  it('should render capitalized event and correct time', () => {
    render(<SolarEvent event="sunset" time={1666335086 * 1000} />)

    expect(screen.getByText(/sunset/i).textContent).toBe('Sunset: 06:51')
  })
})
