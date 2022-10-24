import React from 'react'
import * as S from './styles'

interface SwitchProps {
  id: string
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function Switch({ id, onCheckedChange, checked, label }: SwitchProps) {
  return (
    <S.Switch {...{ id, onCheckedChange, checked }} aria-label={label}>
      <S.SwitchThumb />
    </S.Switch>
  )
}
