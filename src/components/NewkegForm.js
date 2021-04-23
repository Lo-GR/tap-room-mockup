import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){
  function handleNewKeg(event){
    event.preventDefault();
    props.onNewKeg({
      name: event.target.name.value,
      price: event.target.price.value,
      alc: event.target.alc.value,
      flavor: event.target.flavor.value,
      id: v4(),
      // below is how many pints are in the keg to begin
      volume: 124
    })
  }
}