import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: { children: 'Weather app', size: 'lg' },
  argTypes: {
    size: {
      options: ['lg', 'xl'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const XLarge: StoryObj<HeadingProps> = { args: { size: 'xl' } }

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    size: 'xl',
    asChild: true,
    children: <h1>15 ºC</h1>
  },
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } }
  }
}
