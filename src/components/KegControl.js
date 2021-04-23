import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';

class KegControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterKegList: []
    }
  }
  render(){
    let currentlyVisibleState = null;
    if(this.state.KegDeetsVisible){
      currentlyVisibleState = <KegDetails/>
    } else {
      currentlyVisibleState = <KegList/>
    }
    return(
      <>
        {currentlyVisibleState}
      </>
    )
  }
}

export default KegControl;