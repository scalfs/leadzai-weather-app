import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Required } from 'utils'

export interface HeadingProps {
  children: ReactNode
  size?: 'lg' | 'xl'
  weight?: 'regular' | 'bold'
  as?: keyof JSX.IntrinsicElements
}

export function Heading({
  children,
  as = 'h2',
  size = 'lg',
  weight = 'regular'
}: HeadingProps) {
  return <StyledHeading {...{ as, size, weight }}>{children}</StyledHeading>
}

const StyledHeading = styled.h2<Required<HeadingProps, 'size' | 'weight'>>`
  ${({ theme, size, weight }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
  `}
`
