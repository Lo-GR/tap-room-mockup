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
    let buttonText = "Temp";
    let currentlyVisibleState = null;
    if(this.state.KegDeetsVisible){
      currentlyVisibleState = <KegDetails/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
    }
    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default KegControl;