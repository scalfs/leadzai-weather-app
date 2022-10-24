import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'
import { capitalize } from 'utils'
import * as S from './styles'

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
    <S.Select value={selected} onValueChange={onChangeSelected}>
      <S.SelectTrigger aria-label={label}>
        <S.SelectValue />
        <S.SelectIcon>
          <SelectPrimitive.Icon />
        </S.SelectIcon>
      </S.SelectTrigger>

      <SelectContent>
        {sections.map(({ title, data }) => (
          <S.SelectGroup key={title}>
            <S.SelectLabel>{capitalize(title)}</S.SelectLabel>
            {data.map(({ id, name }) => (
              <S.SelectItem value={id} key={id}>
                <S.SelectItemText>{name}</S.SelectItemText>
              </S.SelectItem>
            ))}
          </S.SelectGroup>
        ))}
      </SelectContent>
    </S.Select>
  )
}

function SelectContent({ children }: { children: React.ReactNode }) {
  return (
    <SelectPrimitive.Portal>
      <S.StyledContent>
        <S.SelectViewport>{children}</S.SelectViewport>
      </S.StyledContent>
    </SelectPrimitive.Portal>
  )
}
