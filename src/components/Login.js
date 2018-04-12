import React, { Component } from 'react'


class Login extends Component {
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
    var style = {
        display: this.props.visible? 'initial': 'none'
    }
    var errorStyle = {
        display: this.props.error? 'initial': 'none'        
    }
    return (
          <div style={style}>
             <span>Login</span>
             <div>
                 <span style={errorStyle}>Error: {this.props.error}</span>
             </div>
             <form
                onSubmit={e => this.onSubmit(e)}
             >
                 <div>
                     <span>email</span>
                     <input 
                         name="email" 
                         type="email"
                         value={this.state.email}
                         onChange={e => this.handleChange(e)}/>
                 </div>
                 <div>
                     <span>password</span>
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

export default Login;