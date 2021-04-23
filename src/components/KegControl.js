import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';

class KegControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterKegList: [],
      KegDeetsVisible: false
    }
  }

  handleChangingSelectedKeg = () =>{
    this.setState({KegDeetsVisible: true})
  }
  render(){
    let currentlyVisibleState = null;
    if(this.state.KegDeetsVisible){
      currentlyVisibleState = <KegDetails/>
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onTicketSelection={this.handleChangingSelectedKeg}/>
    }
    return(
      <>
        {currentlyVisibleState}
      </>
    )
  }
}

export default KegControl;