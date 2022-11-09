import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'
import styled, { css } from 'styled-components'
import { capitalize } from 'utils'

export interface SelectProps {
  label: string
  selected: string
  onChangeSelected: (id: string) => void
  sections: { title: string; data: { id: string; name: string }[] }[]
}

export function Select({
  label,
  sections,
  selected,
  onChangeSelected
}: SelectProps) {
  return (
    <SelectRoot value={selected} onValueChange={onChangeSelected}>
      <SelectTrigger aria-label={label}>
        <SelectValue />
        <SelectIcon>
          <SelectPrimitive.Icon />
        </SelectIcon>
      </SelectTrigger>

      <SelectContent>
        {sections.map(({ title, data }) => (
          <SelectGroup key={title}>
            <SelectLabel>{capitalize(title)}</SelectLabel>
            {data.map(({ id, name }) => (
              <SelectItem value={id} key={id}>
                <SelectItemText>{name}</SelectItemText>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

function SelectContent({ children }: { children: React.ReactNode }) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent>
        <SelectViewport>{children}</SelectViewport>
      </StyledContent>
    </SelectPrimitive.Portal>
  )
}

const SelectTrigger = styled(SelectPrimitive.SelectTrigger)`
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

const SelectIcon = styled(SelectPrimitive.SelectIcon)`
  color: grey;
`

const StyledContent = styled(SelectPrimitive.Content)`
  ${({ theme }) => css`
    min-width: 92px;
    background-color: ${theme.colors.surfaceVariant};
    box-shadow: 0px 4px 8px -2px ${theme.colors.shadow};
  `}
`

const SelectViewport = styled(SelectPrimitive.Viewport)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xs} 0px;
  `}
`

const SelectLabel = styled(SelectPrimitive.Label)`
  ${({ theme }) => css`
    opacity: 0.6;
    font-size: ${theme.font.sizes.xs};
    color: ${theme.colors.onSurfaceVariant};
    padding: ${theme.spacings['2xs']} ${theme.spacings.sm};
  `}
`

const SelectItem = styled(SelectPrimitive.Item)`
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

const SelectRoot = SelectPrimitive.Root
const SelectValue = SelectPrimitive.Value
const SelectGroup = SelectPrimitive.Group
const SelectItemText = SelectPrimitive.ItemText
