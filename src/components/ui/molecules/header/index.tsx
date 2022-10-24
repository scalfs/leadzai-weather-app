import styled, { css } from 'styled-components'
import React from 'react'
import { Heading } from 'components/ui'

export interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <StyledHeader>
      <Heading>{title}</Heading>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.sm};
    background-color: ${theme.colors.surface};
  `}
`
