import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Registration.css';

const RegistrationButton = (props) => {
    let { color, text } = props;
    const _handleClick = () => {
        console.log('====================================');
        console.log('registrations clicked', color);
        console.log('====================================');
    }
    return (
        <div 
            className="button-wrapper"
            className={`button-wrapper ${color === 'blue' ? 'btn--blue' : 'btn--red' }`}
        >
            <button
                className={`btn btn-registration`}
                name="registration"
                onClick={_handleClick}
            >
                { text }
            </button>
        </div>
    )
}

export const Registration = () => {
    return (
        <div className="header__registration">
            <div className="container">
                <RegistrationButton text='Registration' color='blue' />
                <div className="input-group">
                    <input 
                        className="header__input header__input--username" 
                        type="text"
                        placeholder="Username"                    
                    />
                    <input 
                        className="header__input header__input--password" 
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <RegistrationButton text='Login' color='red' />
                <div className="row">
                    <Link to="/" className="btn btn-forgotPassword">Forgot Password</Link>
                </div>
            </div>
        </div>
      )
}
