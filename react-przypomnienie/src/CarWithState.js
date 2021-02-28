import React from 'react';

class CarWithState extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <span style={{color: this.state.color}}>I am a {this.state.color} Car!</span>;
    }
  }

  export default CarWithState;