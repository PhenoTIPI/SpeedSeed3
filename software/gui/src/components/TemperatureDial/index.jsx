// ./src/components/Piechart/index.jsx
 
import React, { Component } from 'react';
import { pie } from 'd3';
import * as scale  from 'd3-scale';
import TemperatureSetting  from './Arc';
 
class TemperatureDial extends Component {
  constructor() {
    super();
    this.pie = pie().value((d) => d.value);
    this.colors = scale.scaleOrdinal(scale.schemeCategory20);
  }
  arcGenerator(d, i) {
    return (
      <TemperatureSetting key={`arc-${i}`}
        data={d}
        innerRadius={this.props.innerRadius}
        outerRadius={this.props.outerRadius}
        color={this.colors(i)} />
    );
  }

  render() {
    let pie = this.pie(this.props.data),
      translate = `translate(${this.props.x}, ${this.props.y})`;

    return (
      <g transform={translate}>
        {pie.map((d, i) => this.arcGenerator(d, i))}
      </g>
    )
  }
}
 
export default TemperatureDial;