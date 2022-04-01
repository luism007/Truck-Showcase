import React, { useState } from "react";
import truckActions from "../../redux/actions/TruckActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./TruckCreateTruckForm.css";

const TruckCreateTruckForm = (props) => {
  const [truck, setTruck] = useState({});

  const handleFormChange = (event) => {
    const truck = {
      manufacturer: "",
      name: event.target.value,
      trim: "",
    };
    setTruck(truck);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    props.dispatch(truckActions.createTruck(truck));
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
              <form onSubmit={handleSubmit}>
                <div className="formInputContainer">
                  <label> Manufacturer </label>
                  <input type="text" onChange={handleFormChange}></input>
                </div>
                <div className="formInputContainer">
                  <label> Model </label>
                  <input type="text"></input>
                </div>
                <div className="formInputContainer">
                  <label> Trim </label>
                  <input type="text"></input>
                </div>
                <div className="formInputContainer">
                  <label> Year </label>
                  <input type="text"></input>
                </div>
                <div className="formInputContainer">
                  <input type="submit" value="Submit"></input>
                </div>
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
