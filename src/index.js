import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Header from 'containers/Header'
import Router from 'router'
import rootReducer from 'reducers'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <div>
          <Header />
          <Router />
        </div>
    </Provider>, 
    document.getElementById('root'));

