import React, {Component} from 'react';
import VoyageStatus from './VoyageStatus';
import VoyageSummary from './VoyageSummary';
import './HomeDash.css';

class HomeDash extends Component{
  render(){
    return(
      <div className="HomeDash">
        <VoyageStatus />
        <VoyageSummary />
      </div>
    );
  }
}

export default HomeDash;

// should hold all components for dashboard (dashboard menu, navbar, voyages, summary)