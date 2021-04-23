import React from 'react';
import Beer from "./../img/beer-background-strip.jpg"


function Header(){
  return (
    <>
      <div className="header">
      <img src={Beer} id="beerImage" alt="An image of tickets" />
      </div>
    </>
  )
}

export default Header;