import { Switch } from 'components/ui'
import { Text } from 'components/ui'
import { CelsiusScale, FahrenheitScale } from 'config/temperature-scale'
import { useOptions } from 'context'
import React from 'react'
import styled from 'styled-components'

export function ScaleSwitch() {
  const { changeScale, temperatureScale } = useOptions()

  const checked = temperatureScale === FahrenheitScale

  const onCheckedChange = (checked: boolean) => {
    const newScale = checked ? FahrenheitScale : CelsiusScale
    changeScale(newScale)
  }

  return (
    <Wrapper>
      <Text>
        <label htmlFor="s1">{CelsiusScale.unit}</label>
      </Text>

      <Switch id="s1" onCheckedChange={onCheckedChange} checked={checked} />

      <Text>
        <label htmlFor="s1">{FahrenheitScale.unit}</label>
      </Text>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`
