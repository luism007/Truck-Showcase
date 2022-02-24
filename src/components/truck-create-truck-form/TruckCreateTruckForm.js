import React, { useState } from "react"
import truckActions from '../../redux/actions/TruckActions';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const TruckCreateTruckForm = (props) => {

    const [truck, setTruck] = useState({});

    const handleFormChange = (event) => {
        console.log('Form: ', event.target.value);
        const truck = {
            manufacturer: '',
            name: event.target.value,
            trim: ''
        };
        setTruck(truck);
     }

     const handleSubmit = (event) => {
         event.preventDefault();
         // eslint-disable-next-line no-undef
         props.dispatch(truckActions.createTruck(truck))
        console.log(event);
     }

    return(
        <div>
            <h1> Create Truck </h1>
            <form onSubmit={ handleSubmit }>
                <input type = "text" onChange={ handleFormChange }></input>
                <input type = "submit" value = "Submit"></input> 
            </form>
        </div>
    );
}

TruckCreateTruckForm.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        trucks: state.trucks
    }
};

export default connect(mapStateToProps)(TruckCreateTruckForm);