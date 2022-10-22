import { Text } from 'components/text'
import React from 'react'
import * as S from './styles'

export function UnitSwitch() {
  return (
    <S.Wrapper>
      <Text>
        <label htmlFor="s1">&#176;C</label>
      </Text>

      <S.Switch id="s1">
        <S.SwitchThumb />
      </S.Switch>

      <Text>
        <label htmlFor="s1">&#176;F</label>
      </Text>
    </S.Wrapper>
  )
}
