import React from "react";
import TruckList from '../truck-list/TruckList';
import TruckShowcase from '../truck-showcase/TruckShowcase';
import TruckCreateTruckForm from '../truck-create-truck-form/TruckCreateTruckForm';
import { useEffect, useState } from 'react';
import * as trucksApi from '../../api/TrucksApi';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import truckActions from '../../redux/actions/TruckActions';
const Home = (props) => {
    const [trucks, setTrucks] = useState([]);
  
    useEffect(() => {
      getTrucks();
    }, []);
  
  const getTrucks = async () => {
    const body = await trucksApi.getTrucks();
    let truckList =
      body !== null
        ? body
        : [
            {
              truckManufacturer: "Toyota",
              truckName: "Tacoma",
              truckTrim: "TRD Off-Road Pro",
            },
            {
              truckManufacturer: "Chevrolet",
              truckName: "Colorado",
              truckTrim: "ZR2 Bison",
            },
            {
              truckManufacturer: "Ford",
              truckName: "Ranger",
              truckTrim: "Tremor",
            },
            {
              truckManufacturer: "Nissan",
              truckName: "Frontier",
              truckTrim: "Pro 4X",
            },
            {
              truckManufacturer: "Jeep",
              truckName: "Gladiator",
              truckTrim: "Rubicon",
            },
          ];
      props.dispatch(truckActions.initializeTrucks(truckList));
  }
  
    return (
      <div>
        <TruckShowcase trucks = {trucks} ></TruckShowcase>
        <TruckList trucks = {trucks}/>
      </div>
    );
}

Home.propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  
  export const mapStateToProps = (state) => {
    return { 
      trucks: state.trucks
    }
  }
  
  export default connect(mapStateToProps)(Home);