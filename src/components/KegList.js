import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <>
      <Keg/>
    </>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onTicketSelection: PropTypes.func
}
export default KegList;