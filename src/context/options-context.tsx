/* eslint-disable @typescript-eslint/no-empty-function */
import { CelsiusScale, TempScale } from 'config/temperature-scale'
import React, { ReactNode, useCallback, useContext, useState } from 'react'

interface Context {
  locationId: string
  temperatureScale: TempScale
  changeLocation: (id: string) => void
  changeScale: (scale: TempScale) => void
}

const defaultValue = {
  locationId: '',
  temperatureScale: CelsiusScale,
  changeScale: () => {},
  changeLocation: () => {}
}

export const OptionsContext = React.createContext<Context>(defaultValue)

interface Props {
  children: ReactNode
}

export function OptionsProvider({ children }: Props) {
  const [locationId, setLocationId] = useState('')
  const [temperatureScale, setTempScale] = useState<TempScale>(CelsiusScale)

  const changeScale = useCallback((scale: TempScale) => setTempScale(scale), [])

  const changeLocation = useCallback((id: string) => setLocationId(id), [])

  return (
    <OptionsContext.Provider
      value={{ locationId, changeLocation, temperatureScale, changeScale }}
    >
      {children}
    </OptionsContext.Provider>
  )
}

export const useOptions = () => useContext<Context>(OptionsContext)
