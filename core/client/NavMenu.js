import React, {Component} from 'react';
import './NavMenu.css';

class NavMenu extends Component{
  render(){
    return(
      <div className="Navmenu">
        <div>
          <img className="img-brand">IVC Brand</img>
        </div>
        <div>
          <h1 className="navHeader">DASHBORAD</h1>
          <h1 className="navHeader">VOYAGES</h1>
          <h1 className="navHeader">ACCOUNT</h1>
          <h1 className="navHeader">ABOUT</h1>
        </div>
      </div>
    )
  }
}

export default NavMenu;