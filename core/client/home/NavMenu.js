import React, {Component} from 'react';
import './NavMenu.css';
import User from './User/User.js';
import VoyageList from './Voyages/VoyageList.js';
import Content from './Content.js';
import About from './About.js';
import {Link, Route} from 'react-router-dom';

class NavMenu extends Component{
  render(){
    return(
      <div className="Navmenu">
        <div>
          <img className="img-brand">IVC Brand</img>
        </div>
        <div>
          <p>
            <Link><img className="navHeader" src="" /></Link>
            <Route path="/user/active" component={User}/>
          </p>
          <p>
            <Link><img className="navHeader" src="" /></Link>
            <Route path="/voyages" component={VoyageList}/>
          </p>
          <p>
            <Link><img className="navHeader" src="" /></Link>
            <Route path="/user/content" component={Content}/>
          </p>
          <p>
            <Link><img className="navHeader" src="" /></Link>
            <Route path="/user/about" component={About}/>
          </p>
        </div>
      </div>
    )
  }
}

export default NavMenu;