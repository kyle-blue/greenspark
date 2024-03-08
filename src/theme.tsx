import { css } from '@emotion/react'
import { createTheme } from '@mui/material'

export const GlobalStyle = css`
    body {
        margin: 0;
        font-family: 'Helvetica', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        color: #141414;
        background-color: #ececec;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Helvetica', sans-serif;
        color: #141414;
    }

    p {
        color: #141414;
        font-family: 'Helvetica', sans-serif;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`

export const palette = {
    primary: '#3B755F',
    secondary: '#F2EBDB',
}

export const muiTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: palette.primary,
        },
        secondary: {
            main: palette.secondary,
        },
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    padding: 0,
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: palette.primary,
                },
            },
        },
    },
    typography: {
        button: {
            textTransform: 'none',
        },
    },
})
