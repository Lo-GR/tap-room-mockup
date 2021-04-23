import React from 'react';
import KegList from './KegList';

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
      </>
    )
  }
}

export default KegControl;