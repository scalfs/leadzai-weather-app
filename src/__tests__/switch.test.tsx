import '@testing-library/jest-dom/extend-expect'
import { Switch } from 'components/ui'
import React from 'react'
import { fireEvent, render, screen } from 'utils'

describe('<Switch />', () => {
  it('should check and uncheck (controlled component)', async () => {
    const ControlledSwitch = () => {
      const [checked, setChecked] = React.useState(false)
      return (
        <Switch
          checked={checked}
          onCheckedChange={() => setChecked((checked) => !checked)}
        />
      )
    }

    render(<ControlledSwitch />)
    const input = screen.getByRole('switch')
    expect(input).not.toBeChecked()

    fireEvent.click(input)
    expect(input).toBeChecked()

    fireEvent.click(input)
    expect(input).not.toBeChecked()
  })
})
