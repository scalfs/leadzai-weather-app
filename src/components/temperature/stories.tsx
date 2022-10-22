import { Meta, StoryObj } from '@storybook/react'
import { Temperature, TemperatureProps } from '.'

export default {
  title: 'Components/Temperature',
  component: Temperature,
  args: { temp: 15, unit: 'C' },
  argTypes: {
    unit: {
      options: ['C', 'F'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<TemperatureProps>

export const Default: StoryObj<TemperatureProps> = {}
