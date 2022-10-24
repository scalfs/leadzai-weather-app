import React from 'react'
import * as S from './styles'

interface SwitchProps {
  id: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function Switch({ id, onCheckedChange, checked }: SwitchProps) {
  return (
    <S.Switch {...{ id, onCheckedChange, checked }}>
      <S.SwitchThumb />
    </S.Switch>
  )
}
