import './App.css';
import CarWithState from './CarWithState';
import CarWithProps from './CarWithProps';
import GarageWithCarInside from './GarageWithCarIsnside';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h3>Car with state:</h3>
      <CarWithState />
      <h3>Car with props:</h3>
      <CarWithProps color="blue" brand="Opel"/>
      <h3>Garage with car inside:</h3>
      <GarageWithCarInside />
    </div>
  );
}

export default App;
