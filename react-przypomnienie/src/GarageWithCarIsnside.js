import React from 'react';
import CarWithState from './CarWithState';
import CarWithProps from './CarWithProps';

class GarageWithCarInside extends React.Component {
  render() {
    const carname = "Renault";

    return <h2>
          I'm a garage and what's inside me?: 
          <ul>
            <li>
              <CarWithState />
            </li> 
            <li>
              <CarWithProps color="green" brand="Ford" />
            </li>
            <li>
              <CarWithProps brand={carname} />
            </li>
          </ul>
        </h2>;
  }
}

export default GarageWithCarInside;