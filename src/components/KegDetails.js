import React from 'react';
import PropTypes from "prop-types";


function KegDetails(props){
  const {keg} = props;

  return (
    <>
      <h3>Name</h3>
      <h3>Brand</h3>
      <h3>Price</h3>
      <h3>Alch Content</h3>
      <h3>Flavor</h3>
    </>
  )
}

KegDetails.PropTypes = {
  keg: PropTypes.object
}

export default KegDetails;