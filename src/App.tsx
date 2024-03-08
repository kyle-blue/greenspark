import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Global } from '@emotion/react'
import Root from './pages/Root'
import GlobalStyle from './theme'
import store from './redux'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
])

function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <Global styles={GlobalStyle} />
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
