import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="Navbar navbar navbar-inverse">
                <div className="continer-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">HOME</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;