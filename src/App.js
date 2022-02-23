import logo from './logo.svg';
import './App.css';
import TruckList from './components/truck-list/TruckList';
import TruckShowcase from './components/truck-showcase/TruckShowcase';
import TruckCreateTruckForm from './components/truck-create-truck-form/TruckCreateTruckForm';
import { useEffect, useState } from 'react';
import * as trucksApi from './api/TrucksApi';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import createTruck from './redux/actions/TruckActions';

const App = (props) => {

  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    getTrucks();
  }, []);

const getTrucks = async () => {
  const body = await trucksApi.getTrucks();
  console.log(body);
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
    // setTrucks([...truckList]);
    props.dispatch(createTruck(...truckList));
}
  return (
    <div>
      <TruckShowcase trucks = {trucks} ></TruckShowcase>
      <TruckList trucks = {trucks}/>
      <TruckCreateTruckForm/>
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export const mapStateToProps = (state) => {
  return { 
    trucks: state.trucks
  }
}

export default connect(mapStateToProps)(App);
