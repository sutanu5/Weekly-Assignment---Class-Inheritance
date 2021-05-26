// declare class

// export class using module.exports
import React, { Component } from "react";


 

class shape extends React.Component {

  constructor(props) {

    super(props);

    this.state = { color: "red" };

  }

  drawShape() {

    return "shape";

  }

  calculateArea() {

    return "Area";

  }

  render() {

    return (

      <div>

        Area:{this.calculateArea()} shape:{this.drawShape()}

      </div>

    );

  }

}


 

export default shape
