import React from 'react';

class CarWithProps extends React.Component {
  render() {
    return <span style={{color: "green"}}>I am a {this.props.brand} Car with {this.props.color} color!</span>;
  }
}

export default CarWithProps;