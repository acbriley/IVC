import React, {Component} from 'react';
import Navbar from './navbar.js'
import './main.css';

class Main extends Component{
    render(){
        return(
            <div className="Main">
                <div className="continer">
                    <div className="mainContent">
                        CONTENT
                    </div>
                    <div className="action">
                        Call to Action
                    </div>
                    <div>
                        <a className="backBtn" href="#">Go Back</a>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Main;