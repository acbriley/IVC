import React, {Component} from 'react';
import NavMenu from './NavMenu.js';
import User from './User/User.js';
import VoyageStatus from './VoyageStatus';
import VoyageSummary from './VoyageSummary';
import './HomeDash.css';

class HomeDash extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="HomeDash">
          <NavMenu />
          <User />
        </div>
      </BrowserRouter>
    );
  }
}

export default HomeDash;

// should hold all components for dashboard (dashboard menu, navbar, voyages, summary)