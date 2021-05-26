// export class using module.exports

import React, { Component } from 'react';


 

import shape from './shape'

class circle extends shape {

    constructor(props) {

      super(props);

  }

    render() {

      return <div>{this.calculateArea()}</div>;

    }

  }

  export default circle;

