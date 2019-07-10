import React, {Component} from 'react';
import './app.css';
import Auth from './auth/Auth.js';

class Landing extends Component{
  render(){
    return(
      <div className="Landing">
        <Auth />
      </div>
    );
  }
}

export default Landing;