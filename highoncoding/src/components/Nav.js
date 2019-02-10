import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="style">
          <AppBar>
              <span>
              <h1>HighOnCoding</h1>
              <span>{this.props.homeButton}</span>
              <span>{this.props.category}</span>
              </span>
          </AppBar>

      </div>
    )
  }
}
