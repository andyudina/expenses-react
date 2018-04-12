import React, { Component } from 'react';
import Header from './Header'
import LoginSignupView from './LoginSignupView'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div>
              <LoginSignupView />
          </div>
      </div>
    );
  }
}

export default App;
