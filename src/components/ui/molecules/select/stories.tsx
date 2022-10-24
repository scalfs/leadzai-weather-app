/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from '.'

const sections = [
  { title: 'brazil', data: [{ id: '1', name: 'Vila Velha' }] },
  { title: 'portugal', data: [{ id: '2', name: 'Lisboa' }] }
]

export default {
  title: 'Molecules/Select',
  component: Select,
  args: { sections, selected: '2', onChangeSelected: () => {} }
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}
