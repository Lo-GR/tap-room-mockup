import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <>
      {props.kegList.sort(
        //this is to sort by alphabetical. Needed due to onpint logic
        (a, b) => {
          a = a.name.toUpperCase(); 
          b = b.name.toUpperCase(); 
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        }
      ).map((keg)=>
      <>
        <div className="kegs">
          <Keg 
          whenKegClicked={props.onKegSelection}
          name = {keg.name}
          id={keg.id}
          flavor={keg.flavor}
          price={keg.price}
          alc={keg.alc}
          brand={keg.brand}
          volume={keg.volume}/>
          <button onClick={()=> props.onPints(keg.id)}>Buy Pint</button>
        </div>
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