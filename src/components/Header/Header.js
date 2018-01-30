import React, { Component } from 'react';

import { Navigation } from './Navigation/Navigation';
import Registration from './Registration/Registration';
import HeaderSlider from './HeaderSlider/HeaderSlider';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navigation />
        <Registration />
        <HeaderSlider />
      </div>
    )
  }
}
