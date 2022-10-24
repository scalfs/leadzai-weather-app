export interface TempScale {
  type: 'celsius' | 'fahrenheit'
  unit: string
  convertFromKelvin: (temp: number) => number
}

export const CelsiusScale: TempScale = {
  type: 'celsius',
  unit: 'ºC',
  convertFromKelvin: (t: number) => t - 273
}

export const FahrenheitScale: TempScale = {
  type: 'fahrenheit',
  unit: 'ºF',
  convertFromKelvin: (t: number) => (9 * (t - 273)) / 5 + 32
}
