import styled, { css } from 'styled-components'

export const WeatherCard = styled.main`
  ${({ theme }) => css`
    margin: auto;
    display: flex;
    flex-direction: column;
    max-width: 32rem;
    gap: ${theme.spacings.xl};
    padding: ${theme.spacings.lg};
  `}
`

export const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
