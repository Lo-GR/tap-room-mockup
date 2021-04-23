import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <>
      {props.kegList.map((keg)=>
      <>
        <Keg 
        whenKegClicked={props.onKegSelection}
        name = {keg.name}
        id={keg.id}
        flavor={keg.flavor}
        price={keg.price}
        alc={keg.alc}
        brand={keg.brand}/>
        <button onClick={()=> props.onPints(keg.id)}>Buy Pint</button>
      </>
      )}
    </>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onPints: PropTypes.func
}
export default KegList;