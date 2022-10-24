import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: string
      surface: string
      onSurface: string
      surfaceVariant: string
      onSurfaceVariant: string
      text: string
      accent: string
      outline: string
      shadow: string
    }
    font: {
      family: string
      sizes: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
      }
      weights: {
        regular: string
        medium: string
        bold: string
      }
    }
    spacings: {
      '2xs': string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
  }
}
