export interface TempScale {
  type: 'celsius' | 'fahrenheit'
  convertFromKelvin: (temp: number) => number
}

export const CelsiusScale: TempScale = {
  type: 'celsius',
  convertFromKelvin: (t: number) => t - 273
}

export const FahrenheitScale: TempScale = {
  type: 'fahrenheit',
  convertFromKelvin: (t: number) => (9 * (t - 273)) / 5 + 32
}
