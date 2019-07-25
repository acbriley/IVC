import React, {Component} from 'react';
import './VoyageStatus.css';

class VoyageStatus extends Component{
  render(){
    return(
      <div className="VoyageStatus">
        <div>Current Voyage</div>
        <div>Voyage Content</div>
      </div>
    );
  }
}

export default VoyageStatus;