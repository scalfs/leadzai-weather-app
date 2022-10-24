import * as SwitchPrimitive from '@radix-ui/react-switch'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`

export const Switch = styled(SwitchPrimitive.Root)`
  ${({ theme }) => css`
    all: unset;
    width: 28px;
    height: 12px;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.surface};
    border-radius: 8px;

    &[data-state='checked'] {
      backgroundcolor: black;
    }
    &:focus-visible {
      outline: 2px solid ${theme.colors.outline};
      outline-offset: 4px;
      border-radius: 4px;
    }
  `}
`

export const SwitchThumb = styled(SwitchPrimitive.Thumb)`
  ${({ theme }) => css`
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    transition: transform 100ms;
    will-change: transform;

    &[data-state='checked'] {
      transform: translateX(12px);
    }
  `}
`
