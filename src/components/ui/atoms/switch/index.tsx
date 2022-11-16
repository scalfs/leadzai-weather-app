import React from 'react'
import styled, { css } from 'styled-components'

interface SwitchProps {
  id?: string
  label?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function Switch({ id, onCheckedChange, checked, label }: SwitchProps) {
  return (
    <SwitchRoot
      {...{ id }}
      type="button"
      role="switch"
      aria-label={label}
      aria-checked={checked}
      data-state={getState(checked)}
      onClick={() => onCheckedChange(!checked)}
    >
      <SwitchThumb data-state={getState(checked)} />
    </SwitchRoot>
  )
}

const getState = (checked: boolean) => (checked ? 'checked' : 'unchecked')

const SwitchRoot = styled.button`
  ${({ theme }) => css`
    all: unset;
    width: 28px;
    height: 12px;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.surface};
    border-radius: 8px;

    &:focus-visible {
      outline: 2px solid ${theme.colors.outline};
      outline-offset: 4px;
      border-radius: 4px;
    }
  `}
`

const SwitchThumb = styled.span`
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
