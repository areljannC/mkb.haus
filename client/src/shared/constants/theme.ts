const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
}

const fontSizes = ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px', '96px']

const theme = {
  space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'],
  fonts: {
    body: `'Lato', sans-serif`,
    heading: `'Lato', sans-serif`,
    monospace: `'Lato', sans-serif` // replace this with a monospace font in the future
  },
  fontSizes: [...fontSizes],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: '1.5rem',
    heading: '1.125rem'
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      ...heading,
      fontSize: fontSizes[6]
    },
    h2: {
      ...heading,
      fontSize: fontSizes[4]
    },
    h3: {
      ...heading,
      fontSize: fontSizes[3]
    },
    h4: {
      ...heading,
      fontSize: fontSizes[2]
    },
    h5: {
      ...heading,
      fontSize: fontSizes[1]
    },
    h6: {
      ...heading,
      fontSize: fontSizes[0]
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0px'
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  },
  colors: {
    text: 'hsl(210, 50%, 96%)',
    background: 'hsl(230, 25%, 18%)',
    primary: 'hsl(260, 100%, 80%)',
    secondary: 'hsl(290, 100%, 80%)',
    highlight: 'hsl(260, 20%, 40%)',
    purple: 'hsl(290, 100%, 80%)',
    muted: 'hsla(230, 20%, 0%, 20%)',
    gray: 'hsl(210, 50%, 60%)'
  }
}

export default theme
