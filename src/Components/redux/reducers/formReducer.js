import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

const Form = ({ formData, updateFormData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Do something with the form data
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({ [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  formData: state,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormData: (data) => dispatch({ type: 'UPDATE_FORM_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
