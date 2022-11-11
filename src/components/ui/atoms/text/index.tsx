import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import styled, { css } from 'styled-components'
import { Required } from 'utils'

export type TextProps<C extends ElementType = 'span'> = {
  as?: C
  size?: 'sm' | 'md'
}

type Props<C extends ElementType> = TextProps<C> & ComponentPropsWithoutRef<C>

export function Text<C extends ElementType>({
  size = 'sm',
  as = 'span',
  children,
  ...rest
}: Props<C>) {
  return (
    <StyledText {...{ as, size }} {...rest}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.span<Required<TextProps, 'size'>>`
  ${({ theme, size }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes[size]};
  `}
`
