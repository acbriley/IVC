import React, {Component} from 'react';
import Login from './login.js.js'
import Register from './register.js.js'
import './Auth.css';

class Auth extends Component{
  render(){
    return(
      <div className="Auth">
        {/* need logic to determine which component to render: register/login */}
        <Login />
        <Register />
      </div>
    );
  }
}

export default Auth;