import styled, { css } from 'styled-components'
import * as SelectPrimitive from '@radix-ui/react-select'

export const SelectTrigger = styled(SelectPrimitive.SelectTrigger)`
  ${({ theme }) => css`
    all: unset;
    height: 36px;
    min-width: 92px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacings.sm};
    font-size: ${theme.font.sizes.sm};
    background-color: ${theme.colors.surfaceVariant};
    box-shadow: 0px 4px 8px -2px ${theme.colors.shadow};

    &:hover {
      background-color: ${theme.colors.accent};
    }
    &:focus-visible {
      border-radius: 4px;
      outline-offset: 2px;
      outline: 2px solid ${theme.colors.outline};
    }
  `}
`

export const SelectIcon = styled(SelectPrimitive.SelectIcon)`
  color: grey;
`

export const StyledContent = styled(SelectPrimitive.Content)`
  ${({ theme }) => css`
    min-width: 92px;
    background-color: ${theme.colors.surfaceVariant};
    box-shadow: 0px 4px 8px -2px ${theme.colors.shadow};
  `}
`

export const SelectViewport = styled(SelectPrimitive.Viewport)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xs} 0px;
  `}
`

export const SelectLabel = styled(SelectPrimitive.Label)`
  ${({ theme }) => css`
    opacity: 0.6;
    color: ${theme.colors.onSurfaceVariant};
    font-size: ${theme.font.sizes.xs};
    padding: ${theme.spacings['2xs']} ${theme.spacings.sm};
  `}
`

export const SelectItem = styled(SelectPrimitive.Item)`
  ${({ theme }) => css`
    all: unset;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xs};
    padding-left: ${theme.spacings.lg};
    font-size: ${theme.font.sizes.xs};
    color: ${theme.colors.onSurfaceVariant};
    user-select: none;

    &[data-highlighted] {
      background-color: ${theme.colors.accent};
    }
  `}
`

export const Select = SelectPrimitive.Root
export const SelectValue = SelectPrimitive.Value
export const SelectGroup = SelectPrimitive.Group
export const SelectItemText = SelectPrimitive.ItemText
