import logo from './logo.svg';
import './App.css';
import TruckList from './components/truck-list/TruckList';
import TruckShowcase from './components/truck-showcase/TruckShowcase';
import { useEffect, useState } from 'react';

function App() {

  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    getTrucks();
  }, []);

const getTrucks = async () => {

  const response = await fetch('http://localhost:3000/trucks');
  const body = await response.json();
  console.log('Returned from API', body);
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
    setTrucks([...truckList]);
}
  return (
    <div>
      <TruckShowcase trucks = {trucks} ></TruckShowcase>
      <TruckList trucks = {trucks}/>
    </div>
  );
}

export default App;
