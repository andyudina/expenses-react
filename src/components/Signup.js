import React, { Component } from 'react'


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '', 
      repeate_password: ''
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
        this.state.password,
        this.state.repeate_password,
    );
  }

  render() {
  	console.log(this.props);
    var style = {
        display: this.props.visible? 'initial': 'none'
    }
    var errorStyle = {
        display: this.props.error? 'initial': 'none'
    } 
    return (
          <div style={style}>
             <span>Sign Up</span>
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
                     <span>repeate password</span>
                     <input 
                         name="repeate_password" 
                         type="password"
                         value={this.state.repeate_password}
                         onChange={e => this.handleChange(e)}/>
                 </div>
                 <div>
                    <button type="submit">
                    Sign Up
                    </button>
                 </div>
             </form>
         </div>
     )
   }
}

export default Signup;