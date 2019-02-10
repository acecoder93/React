import React, { Component } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import './BodyStyle.css'

export default class Body extends Component {
  render() {
    return (
      <div className="bodyStyle">
          <Content1 />
          <Content2 />
          <Content3 />
        
      </div>
    )
  }
}
