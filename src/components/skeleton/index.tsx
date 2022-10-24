import styled, { css } from 'styled-components'

import React from 'react'

interface Props {
  width: number
  height: number
}

export function Skeleton({ width, height }: Props) {
  return <StyledSkeleton {...{ width, height }} />
}

const StyledSkeleton = styled.div<Props>`
  ${({ width, height, theme }) => css`
    width: ${width}px;
    height: ${height}px;

    background-image: linear-gradient(
      -90deg,
      ${theme.colors.background} 0%,
      ${theme.colors.surface} 50%,
      ${theme.colors.background} 100%
    );

    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
      0% {
        background-position: 0% 0%;
      }

      100% {
        background-position: -135% 0%;
      }
    }
  `}
`
