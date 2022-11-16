import { TempScale } from 'config/temperature-scale'

function temperatureFormatter(scale: TempScale['type']) {
  return new Intl.NumberFormat('pt', {
    unit: scale,
    style: 'unit',
    maximumFractionDigits: 0
  })
}

export function localizeTemperature(temp: number, scale: TempScale['type']) {
  return temperatureFormatter(scale).format(temp)
}

export function getTempUnit(scale: TempScale['type']) {
  return temperatureFormatter(scale).format(0).split(' ')[1]
}
