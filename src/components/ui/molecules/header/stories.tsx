import { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from '.'

export default {
  title: 'Molecules/Header',
  component: Header,
  args: { title: 'Weather App' },
  argTypes: {
    title: { control: { type: 'text' } }
  }
} as Meta<HeaderProps>

export const Default: StoryObj<HeaderProps> = {}
