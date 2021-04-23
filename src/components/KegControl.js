import React from 'react';
import KegList from './KegList';
import KegDetails from './KegDetails';

class KegControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterKegList: [{name: "keggy", id: "1"}],
      selectedKeg: null,
      formVisible: false
    }
  }
  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisible: false,
        selectedKeg: null
      });
    }else{
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }
  handleChangingSelectedKeg = (id) =>{
    const keg = this.state.masterKegList.filter(e => e.id === id)[0];
    this.setState({
      selectedKeg: keg,
    })
  }
  handleAddingNewKeg = (newKeg) =>{
    const newKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newKegList,
      formVisible: false})
  }
  render(){
    let buttonText = "Return to Keg List";
    let currentlyVisibleState = null;
    if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} />
    } else if (this.state.formVisible){
      currentlyVisibleState = "test";
    } else {
      buttonText ="Add Keg";
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