import { css } from '@emotion/react'

const GlobalStyle = css`
    body {
        margin: 0;
        font-family: 'Helvetica', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
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
export default GlobalStyle
