import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Required } from 'utils'

export interface HeadingProps {
  as?: 'h1' | 'h2'
  children: ReactNode
  size?: 'lg' | 'xl'
  weight?: 'regular' | 'bold'
}

export function Heading({
  as,
  children,
  size = 'lg',
  weight = 'regular'
}: HeadingProps) {
  const Comp = as ? StyledHeading.withComponent(as) : StyledHeading

  return <Comp {...{ size, weight }}>{children}</Comp>
}

const StyledHeading = styled.h2<Required<HeadingProps, 'size' | 'weight'>>`
  ${({ theme, size, weight }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
  `}
`
