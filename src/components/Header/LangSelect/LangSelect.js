import React, { Component } from 'react';
import './LangSelect.css';

export default class LangSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLang: 'EN'
        }
    }

    _renderFlag = () => {
        if( this.state.currentLang === 'EN' ) {
            return (
                <i className="lang__flag"><img src={require('../../../assets/images/icons/us-flag.png')} alt=""/></i>
            )
        } else {
            return (
                <i className="lang__flag"><img src={require('../../../assets/images/icons/ru-flag.png')} alt=""/></i>            
            )
        }
        
    }

    _handleChange = (event) => {
        this.setState({
            currentLang: event.target.value
        })
    }

    render() {
        return (
            <div className="header__lang">
                { this._renderFlag() }
                <select onChange={this._handleChange} name="lang-select" id="lang-select" className="lang__lang-select">
                    <option value="EN">English</option>
                    <option value="RU">Russian</option>
                </select>
            </div>
        )
    }
}