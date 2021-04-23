import React from 'react';
import PropTypes from "prop-types";


function KegDetails(props){
  const {keg} = props;

  return (
    <>
      <h3>Keg Details</h3>
      <h3>Name: {keg.name}</h3>
      <h3>ID: {keg.id}</h3>
      <h3>Alch Content</h3>
      <h3>Flavor</h3>
    </>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object
}

export default KegDetails;