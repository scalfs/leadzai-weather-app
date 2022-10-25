import { Meta, StoryObj } from '@storybook/react'
import { Temperature, TemperatureProps } from '.'

export default {
  title: 'Components/Temperature',
  component: Temperature,
  args: { temp: 288 }
} as Meta<TemperatureProps>

export const Default: StoryObj<TemperatureProps> = {}
