import styled, { css } from 'styled-components'
import React from 'react'
import { Heading } from 'components/heading'

export function Header() {
  return (
    <StyledHeader>
      <Heading>Weather App</Heading>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacings.md};
    background-color: ${theme.colors.surface};
  `}
`
