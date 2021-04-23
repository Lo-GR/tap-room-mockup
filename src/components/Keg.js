import React from 'react';
import PropTypes from "prop-types";


function Keg(props){
  return (
    <>
      <div onClick = {()=> props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
      </div>
    </>
  )
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string
}
export default Keg;