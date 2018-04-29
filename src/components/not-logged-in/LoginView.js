import React, { Component } from 'react'


class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '', 
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(
        this.state.email,
        this.state.password);
  }

  render() {
    let errorStyle = {
        genericError: {
          display: this.props.errors.genericError? 'initial': 'none'
        },
        emailError: {
          display: this.props.errors.emailError? 'initial': 'none'
        },
        passwordError: {
          display: this.props.errors.passwordError? 'initial': 'none'
        },
    }
    return (
          <div>
             <span>Login</span>
             <div>
                <span style={errorStyle.genericError}>
                  Error: {this.props.errors.genericError}
                </span>
             </div>
             <form
                onSubmit={e => this.onSubmit(e)}
             >
                 <div>
                    <span>Email </span>
                    <span style={errorStyle.emailError}>
                      Error: {this.props.errors.emailError}
                    </span>
                    <input 
                         name="email" 
                         type="email"
                         value={this.state.email}
                         onChange={e => this.handleChange(e)}/>
                 </div>
                 <div>
                    <span>Password </span>
                    <span style={errorStyle.passwordError}>
                      Error: {this.props.errors.passwordError}
                    </span>
                     <input 
                         name="password" 
                         type="password"
                         value={this.state.password}
                         onChange={e => this.handleChange(e)}/>
                 </div>
                 <div>
                    <button type="submit">
                    Login
                    </button>
                 </div>
             </form>
         </div>
     )
   }
}

export default LoginView;