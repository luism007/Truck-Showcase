import React, { useState } from "react";
import truckActions from "../../redux/actions/TruckActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TruckInputField from "../truck-input-field/TruckInputField";
import "./TruckCreateTruckForm.css";
import * as trucksApi from '../../api/TrucksApi';
const TruckCreateTruckForm = (props) => {
  const [truck , setTruck] = useState({});
  const inputs = [
    {
      id: 1,
      elementId: "manufacturerInput",
      field: "manufacturer",
      label: "Manufacturer",
      placeholder: "Manufacturer",
      required: true,
      pattern: /^[a-zA-Z]{16}$/g,
      type: "text",
      error: 'Letters only. 16 chars max'
    },
    {
      id: 2,
      elementId: "modelInput",
      field: "model",
      label: "Model",
      placeholder: "Model",
      required: true,
      pattern: /^[a-zA-Z]{16}$/g,
      type: "text",
      error: 'Letters only. 16 chars max'
    },
    {
      id: 3,
      elementId: "trimInput",
      field: "trim",
      label: "Trim",
      placeholder: "Trim",
      required: true,
      pattern: /^[a-zA-Z]{16}$/g,
      type: "text",
      error: 'Letters only. 16 chars max'
    },
    {
      id: 4,
      elementId: "yearInput",
      field: "year",
      label: "Year",
      placeholder: "Year",
      required: true,
      pattern: /^([1-2][0-9][0-9][0-9])$/g,
      type: "number",
      error: '4 digit numbers only'
    },
  ];
  const [truckForm, setTruckForm] = useState(
      {
         manufacturer: '',
          model: '',
          trim: '',
          year: ''
      }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTruck = {
        manufacturer: document.getElementById('manufacturerInput').value,
        name: document.getElementById('modelInput').value,
        trim: document.getElementById('trimInput').value,
        year: document.getElementById('yearInput').value
    };
    setTruck(newTruck);
    const response = await trucksApi.createTruck(newTruck);
    // eslint-disable-next-line no-undef
    if(response) { 
      props.dispatch(truckActions.createTruck(truck));
    }
    //props.dispatch(truckActions.createTruck(truck));
  };

  function onChange (e) {
      setTruckForm({ ...truckForm, [e.target.name]: e.target.value });
  };

  const closeForm = () => {
    props.close();
  };

  const displayForm = (display) => {
    if (!display) {
      return null;
    } else {
      return (
        <div className="formWrapper" id="modal">
          <div className="formContainer open" id = "form">
            <div className="formTitleContainer">
              <h1> Create Truck </h1>
              <div className="formButtonContainer">
                <button onClick={closeForm}> Close </button>
              </div>
            </div>
            <div className="formInputsContainer">
              <form onSubmit={handleSubmit} id="truckForm">
                {inputs.map((input) => (
                  <TruckInputField key = {input.id} {...input } name = { input.field } value = {truckForm[input.field]} onChange = { onChange }/>
                ))}
                <button className="submitButton">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };

  return displayForm(props.display);
};

TruckCreateTruckForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    trucks: state.trucks,
  };
};

export default connect(mapStateToProps)(TruckCreateTruckForm);
