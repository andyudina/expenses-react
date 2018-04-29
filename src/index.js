import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Header from 'containers/Header'
import Router from 'router'
import configureStore from 'configure-store'

const store = configureStore()

render(
    <Provider store={store}>
        <div>
          <Header />
          <Router />
        </div>
    </Provider>, 
    document.getElementById('root'));

