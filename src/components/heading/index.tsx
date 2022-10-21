import { Slot } from '@radix-ui/react-slot'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Required } from 'utils/utility-types'

export interface HeadingProps {
  size?: 'lg' | 'xl'
  children: ReactNode
  asChild?: boolean
}

export function Heading({ size = 'lg', children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Wrapper size={size}>
      <Comp>{children}</Comp>
    </Wrapper>
  )
}

const Wrapper = styled(Slot)<Required<HeadingProps, 'size'>>`
  ${({ theme, size }) => css`
    color: ${theme.colors.text};
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.sizes[size]};
  `}
`
