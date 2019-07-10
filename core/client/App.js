import React, {Component} from 'react';
import HomeDash from './home/HomeDash.js';
import Landing from './landing/Landing.js';
import './App.css';
import {Route, Link, BrowserRouter} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* need to render components based on state */}
        <BrowserRouter>
          <div>
            <Link to="/home"></Link>
            <Route path="/home" component={HomeDash}></Route>
          </div>
          <div>
            <Link to="/"></Link>
            <Route path="/" component={Landing}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;