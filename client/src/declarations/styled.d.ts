import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    space: string[]

    fonts: {
      body: string
      heading: string
      monospace: string
    }

    fontSizes: string[]

    fontWeights: {
      body: number
      heading: number
      bold: number
    }

    lineHeights: {
      body: string
      heading: string
    }

    styles: {
      root: {
        fontFamily: string
        lineHeight: string
        fontWeight: string
      }
      h1: {
        color: string
        fontFamily: string
        lineHeight: string
        fontWeight: string
        fontSize: string
      }
      h2: {
        color: string
        fontFamily: string
        lineHeight: string
        fontWeight: string
        fontSize: string
      }
      h3: {
        color: string
        fontFamily: string
        lineHeight: string
        fontWeight: string
        fontSize: string
      }
      h4: {
        color: string
        fontFamily: string
        lineHeight: string
        fontWeight: string
        fontSize: string
      }
      h5: {
        color: string
        fontFamily: string
        lineHeight: string
        fontWeight: string
        fontSize: string
      }
      h6: {
        color: string
        fontFamily: string
        lineHeight: string
        fontWeight: string
        fontSize: string
      }
      p: {
        color: string
        fontFamily: string
        fontWeight: string
        lineHeight: string
      }
      a: {
        color: string
      }
      pre: {
        fontFamily: string
        overflowX: string
        code: {
          color: string
        }
      }
      code: {
        fontFamily: string
        fontSize: string
      }
      table: {
        width: string
        borderCollapse: string
        borderSpacing: string
      }
      th: {
        textAlign: string
        borderBottomStyle: string
      }
      td: {
        textAlign: string
        borderBottomStyle: string
      }
      img: {
        maxWidth: string
      }
    }

    colors: {
      text: string
      background: string
      primary: string
      secondary: string
      highlight: string
      muted: string
      gray: string
      accent: string
      darken: string
      modes: {
        dark: {
          text: string
          background: string
          primary: string
          secondary: string
          highlight: string
          muted: string
        }
      }
    }
  }
}
