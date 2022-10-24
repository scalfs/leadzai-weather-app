import * as SelectPrimitive from '@radix-ui/react-select'
import { useOptions } from 'context'
import { locations } from 'data'
import React from 'react'
import { capitalize } from 'utils'
import * as S from './styles'

export function SelectLocation() {
  const { locationId, changeLocation } = useOptions()

  return (
    <S.Select value={locationId} onValueChange={changeLocation}>
      <S.SelectTrigger aria-label="locations">
        <S.SelectValue />
        <S.SelectIcon>
          <SelectPrimitive.Icon />
        </S.SelectIcon>
      </S.SelectTrigger>

      <SelectContent>
        {Object.entries(locations).map(([country, cities]) => (
          <S.SelectGroup key={country}>
            <S.SelectLabel>{capitalize(country)}</S.SelectLabel>
            {Object.values(cities).map((city) => (
              <S.SelectItem value={city.id} key={city.id}>
                <S.SelectItemText>{city.name}</S.SelectItemText>
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
