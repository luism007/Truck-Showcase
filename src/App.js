import logo from './logo.svg';
import './App.css';
import TruckList from './components/truck-list/TruckList';
import TruckShowcase from './components/truck-showcase/TruckShowcase';

function App() {
  const trucks = [
    {
        truckManufacturer: 'Toyota',
        truckName: 'Tacoma',
        truckTrim: 'TRD Off-Road Pro'
    },
    {
        truckManufacturer: 'Chevrolet',
        truckName: 'Colorado',
        truckTrim: 'ZR2 Bison'
    },
    {
        truckManufacturer: 'Ford',
        truckName: 'Ranger',
        truckTrim: 'Tremor'
    }
];
  return (
    <div>
      <TruckShowcase trucks = {trucks} ></TruckShowcase>
      <TruckList trucks = {trucks}/>
    </div>
  );
}

export default App;
