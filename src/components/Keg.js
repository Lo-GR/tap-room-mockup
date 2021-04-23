import React from 'react';
import PropTypes from "prop-types";


function Keg(props){
  return (
    <>
      <div onClick = {()=> props.whenKegClicked()}>
        <h3>Name</h3>
      </div>
    </>
  )
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func
}
export default Keg;