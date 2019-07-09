import React, {Component} from 'react';
import HomeDash from './home/HomeDash.js';
import Landing from './landing/Landing.js';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* need to render components based on state */}
        <HomeDash />
        <Landing />
      </div>
    );
  }
}

export default App;