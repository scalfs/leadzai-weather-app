import { Slot } from '@radix-ui/react-slot'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Required } from 'utils'

export interface HeadingProps {
  size?: 'lg' | 'xl'
  weight?: 'regular' | 'bold'
  children: ReactNode
  asChild?: boolean
}

export function Heading({
  size = 'lg',
  weight = 'regular',
  children,
  asChild
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Wrapper {...{ size, weight }}>
      <Comp>{children}</Comp>
    </Wrapper>
  )
}

const Wrapper = styled(Slot)<Required<HeadingProps, 'size' | 'weight'>>`
  ${({ theme, size, weight }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
  `}
`
