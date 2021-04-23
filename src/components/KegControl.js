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
    return(
      <>
        <KegList/>
        <KegDetails/>
      </>
    )
  }
}

export default KegControl;