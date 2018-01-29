import React, { Component } from 'react';

import { Navigation } from './Navigation/Navigation';
import { Registration } from './Registration/Registration';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navigation />
        <Registration />
      </div>
    )
  }
}
