import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Modal from '../../Modal/Modal';

import './Registration.css';

const RegistrationButton = (props) => {
    let { color, text } = props;

    return (
        <div 
            className="button-wrapper"
            className={`button-wrapper ${color === 'blue' ? 'btn--blue' : 'btn--red' }`}
        >
            <button
                className={`btn btn-registration`}
                name="registration"
                onClick={props._toggleModal}
            >
                { text }
            </button>
        </div>
    )
}

export default class Registration extends Component {
    state = {
        isModalOpen: false
    }
    
    _toggleModal = () => {
        this.setState(prevState => ({isModalOpen: !this.state.isModalOpen}));
    }

    render() {
        return (
            <div className="header__registration">
                <div className="container">
                    <RegistrationButton 
                        text='Registration' 
                        color='blue' 
                        _toggleModal={this._toggleModal}
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
                    <RegistrationButton text='Login' color='red' />
                    <div className="row">
                        <Link to="/" className="btn btn-forgotPassword">Forgot Password</Link>
                    </div>
                </div>
                {   this.state.isModalOpen &&
                    ReactDOM.createPortal(
                    <Modal _toggleModal={this._toggleModal} />,
                    document.getElementById('registration-modal')
                    )
                }
            </div>
          )
    }
}
