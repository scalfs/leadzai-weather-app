import { Meta, StoryObj } from '@storybook/react'
import { EventProps, SolarEvent } from '.'

export default {
  title: 'Components/SolarEvent',
  component: SolarEvent,
  args: { event: 'sunset', time: 1666335086 * 1000 },
  argTypes: {
    event: {
      options: ['sunrise', 'sunset'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<EventProps>

export const Default: StoryObj<EventProps> = {}
