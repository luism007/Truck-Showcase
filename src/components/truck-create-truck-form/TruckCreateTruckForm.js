import React, { useState } from "react"
import truckActions from '../../redux/actions/TruckActions';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const TruckCreateTruckForm = (props) => {

    const [truck, setTruck] = useState({});

    const handleFormChange = (event) => {
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
     }

     const toggleModalClass = (display) => {
        if(display) { 
          console.log('Test');
        }
    }
     const displayForm = (display) => {
         if(!display) { 
             // remove active class
             return null;
         } else { 
           return (
             <div className="formWrapper">
               <div className="formContainer">
                 <h1> Create Truck </h1>
                 <button onClick={ props.close }> Close </button>
                 <button onClick = {toggleModalClass(display)}> Test </button>
                 <form onSubmit={handleSubmit}>
                   <input type="text" onChange={handleFormChange}></input>
                   <input type="submit" value="Submit"></input>
                 </form>
               </div>
             </div>
           );
         }
     }

    return(
            displayForm(props.display)
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