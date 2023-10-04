import React from 'react'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import SnackbarProvider from './HOCs/SnackbarContext'
import App from './app/App'
import './index.css'
import { store } from './store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <ScrollToTop />
                <SnackbarProvider>
                    <App />
                </SnackbarProvider>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
