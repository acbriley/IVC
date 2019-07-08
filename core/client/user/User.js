import React, {Component} from 'react';
import Login from './login.js'
import Register from './register.js'
import './User.css';

class User extends Component{
  render(){
    return(
      <div className="User">
        {/* need logic to determine which component to render: register/login */}
        <Login />
        <Register />
      </div>
    );
  }
}

export default User;