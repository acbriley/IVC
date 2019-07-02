import React, {Component} from 'react';
import Navbar from './navbar.js'
import './app.css';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navbar />
            </div>
        );
    }
}

export default App;