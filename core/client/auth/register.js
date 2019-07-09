import React, {Component} from 'react';

class Register extends Component{
  render(){
    return(
      <div className="Register">
        <form>
          <div class="form-group">
            <label for="Username">Username</label>
            <input type="text" class="form-control" id="Username" placeholder="Enter a username" />
          </div>
          <div class="form-group">
            <label for="InputEmail1">Email address</label>
            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="InputPassword1">Password</label>
            <input type="password" class="form-control" id="InputPassword1" placeholder="Password" />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="Check1" />
            <label class="form-check-label" for="Check1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Register;