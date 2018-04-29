import React from 'react'
import Header from 'containers/Header'
import Router from 'router'

const App = ({isFetching}) => {

  return (
    <div>
      {!isFetching &&
        <div>
          <Header />
          <Router />
        </div>}
      {isFetching && <h2>Loading...</h2>}
    </div>
  )
}

export default App