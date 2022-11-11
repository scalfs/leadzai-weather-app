import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Atoms/Heading',
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

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    size: 'xl',
    weight: 'bold',
    as: 'h1',
    children: <h1>15 ºC</h1>
  },
  argTypes: {
    children: { table: { disable: true } },
    as: { table: { disable: true } }
  }
}
