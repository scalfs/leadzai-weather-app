import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Required } from 'utils'

export interface TextProps {
  size?: 'sm' | 'md'
  children: ReactNode
}

export function Text({ size = 'sm', children }: TextProps) {
  return <StyledText size={size}>{children}</StyledText>
}

const StyledText = styled.span<Required<TextProps, 'size'>>`
  ${({ theme, size }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes[size]};
  `}
`
