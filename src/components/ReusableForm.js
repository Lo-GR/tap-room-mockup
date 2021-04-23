import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='number'
          name='price'
          placeholder='Price in whole dollars' />
        <input
          type='number'
          name='alc'
          placeholder='Alcohol Content' />
          <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;