import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from '.'

export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = () => <Header />
