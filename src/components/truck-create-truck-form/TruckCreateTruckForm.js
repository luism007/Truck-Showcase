import React, { useState } from "react";
import truckActions from "../../redux/actions/TruckActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TruckInputField from "../truck-input-field/TruckInputField";
import "./TruckCreateTruckForm.css";

const TruckCreateTruckForm = (props) => {
  const [truck , setTruck] = useState({});
  const inputs = [
    {
      id: 1,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTruck = {
        manufacturer: document.getElementById('manufacturerInput').value,
        name: document.getElementById('modelInput').value,
        trim: document.getElementById('trimInput').value,
        year: document.getElementById('yearInput').value
    };
    setTruck(newTruck);
    // eslint-disable-next-line no-undef
    //props.dispatch(truckActions.createTruck(truck));
  };

  function onChange (e) {
      setTruckForm({ ...truckForm, [e.target.name]: e.target.value });
  };

  const closeForm = () => {
    const form = document.getElementById("modal");
    form.classList.remove("open");
    form.classList.add("close");
    props.close();
  };

  const displayForm = (display) => {
    if (!display) {
      return null;
    } else {
      return (
        <div className="formWrapper">
          <div className="formContainer open" id="modal">
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
                <button>Submit</button>
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
