import React from 'react'
import * as S from './styles'

interface SwitchProps {
  id: string
  onCheckedChange: (checked: boolean) => void
}

export function Switch({ id, onCheckedChange }: SwitchProps) {
  return (
    <S.Switch id={id} onCheckedChange={onCheckedChange}>
      <S.SwitchThumb />
    </S.Switch>
  )
}
