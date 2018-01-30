import React, { Component } from 'react'

import { JackPot } from '../../components/JackPot/JackPot';
import { LastWinners } from '../../components/LastWinners/LastWinners';

export default class WidgetBar extends Component {
  render() {
    return (
      <div className="widget-bar">
        <div className="container">
            <div className="left-widget">
                <LastWinners />            
            </div>
            <div className="right-widget">
                <JackPot />
            </div>
        </div>
      </div>
    )
  }
}
