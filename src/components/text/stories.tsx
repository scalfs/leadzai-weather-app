import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Typography/Text',
  component: Text,
  args: { children: 'Lorem ipsum.', size: 'sm' },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Medium: StoryObj<TextProps> = { args: { size: 'md' } }
