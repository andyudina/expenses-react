import React, { Component } from 'react';
import AnonymousView from '../containers/AnonymousView'
import LoggedinView from '../containers/LoggedinView'

class App extends Component {
  render() {
    return (
      <div>
        <AnonymousView />
        <LoggedinView />
      </div>
    );
  }
}

export default App;
