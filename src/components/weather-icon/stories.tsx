import { Meta, StoryObj } from '@storybook/react'
import { WeatherIcon, WeatherIconProps } from '.'

export default {
  title: 'Components/WeatherIcon',
  component: WeatherIcon,
  args: { icon: '10d', description: 'light rain' },
  argTypes: {
    icon: {
      options: ['02d', '04n'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<WeatherIconProps>

export const Default: StoryObj<WeatherIconProps> = {}
