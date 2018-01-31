import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Modal from '../../Modal/Modal';

import './Registration.css';

const RegistrationButton = (props) => {
    let { color, text, specialClass } = props;

    return (
        <button
                className={`btn btn-${specialClass} btn-default btn--${color}`}
                onClick={props._toggleModal}
            >
                { text }
        </button>
    )
}

class Registration extends Component {

    render() {
        return (
            <div className="header__registration">
                <div className="container">
                    <Link to="/" className="header__logo logo">
                    </Link>
                    <div className="registration__controls">
                        <RegistrationButton 
                            text={this.props.vocabulary.buttons.registration} 
                            color='blue' 
                            specialClass='registration'
                            _toggleModal={this.props.toggleModal}
                        />
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
                        <RegistrationButton text={this.props.vocabulary.buttons.login} color='red' specialClass='login' />
                        <Link to="/" className="btn btn-forgotPassword">{this.props.vocabulary.buttons.forgot_password}</Link>
                    </div>
                </div>
                {   this.props.isOpenModal &&
                    ReactDOM.createPortal(
                    <Modal _toggleModal={this.props.toggleModal} vocabulary={this.props.vocabulary} />,
                    document.getElementById('registration-modal')
                    )
                }
            </div>
          )
    }
}

export default Registration;
