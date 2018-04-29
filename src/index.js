import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'configure-store'
import App from 'containers/App'
import { getCurrentUser } from 'actions/user'

const store = configureStore()
store.dispatch(getCurrentUser())

render(
    <Provider store={store}>
        <div>
          <App />
        </div>
    </Provider>, 
    document.getElementById('root'));

