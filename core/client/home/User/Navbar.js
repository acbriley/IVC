import React, {Component} from 'react';
import Active from './Active.js';
import Past from './Past.js';
import Account from './Account.js'

class User extends Component{
  render(){
    return(
      <div className="UserNavBar">
        <span>
          <Link to="/home/user/active"></Link>
          <Router path="/home/user/active" component={Active}/>
        </span>
        <span>
          <Link to="/home/user/past"></Link>
          <Router path="/home/user/past" component={Past}/>
        </span>
        <span>
          <Link to="/home/user/account"></Link>
          <Router path="/home/user/account" component={Account}/>
        </span>
      </div>
    );
  }
}

export default User;