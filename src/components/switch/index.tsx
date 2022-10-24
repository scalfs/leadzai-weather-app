import { Text } from 'components/text'
import { CelsiusScale, FahrenheitScale } from 'config/temperature-scale'
import { useOptions } from 'context'
import React from 'react'
import * as S from './styles'

export function ScaleSwitch() {
  const { changeScale } = useOptions()

  const onCheckedChange = (checked: boolean) => {
    const newScale = checked ? FahrenheitScale : CelsiusScale
    changeScale(newScale)
  }

  return (
    <S.Wrapper>
      <Text>
        <label htmlFor="s1">{CelsiusScale.unit}</label>
      </Text>

      <S.Switch id="s1" onCheckedChange={onCheckedChange}>
        <S.SwitchThumb />
      </S.Switch>

      <Text>
        <label htmlFor="s1">{FahrenheitScale.unit}</label>
      </Text>
    </S.Wrapper>
  )
}
