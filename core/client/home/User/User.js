import React, {Component} from 'react';
import Navbar from './Navbar.js';


class User extends Component{
  render(){
    return(
      <div className="User">
        <Navbar />
        <Active />
      </div>
    );
  }
}

export default User;