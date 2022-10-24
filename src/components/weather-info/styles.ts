import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};

    animation: opacity 0.5s ease-in;

    @keyframes opacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`

export const WeatherInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.sm};
  `}
`

export const EventsRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: auto;
    gap: ${theme.spacings.md};
  `}
`
