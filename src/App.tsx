import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import Root from './pages/Root'
import { GlobalStyle, muiTheme } from './theme'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
])

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={muiTheme}>
            <Global styles={GlobalStyle} />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
