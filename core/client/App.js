import React, {Component} from 'react';
import HomeDash from './home/HomeDash.js';
import Landing from './landing/Landing.js';
import User from './user/User.js';
import NavMenu from './NavMenu'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NavMenu />
        {/* need to render components based on state */}
        <HomeDash />
        <User />
        <Landing />
      </div>
    );
  }
}

export default App;