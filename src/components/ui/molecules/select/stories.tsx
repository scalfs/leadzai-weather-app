import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from '.'

const options = [
  { id: '1', name: 'Vila Velha' },
  { id: '2', name: 'Lisboa' }
]

export default {
  title: 'Molecules/Select',
  component: Select,
  args: { options, selected: '2', onSelectOption: () => null }
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}
