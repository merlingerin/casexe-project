import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../../Modal/Modal';
import { toggleModal } from '../../../actions';

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
                            text='Registration' 
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
                        <RegistrationButton text='Login' color='red' specialClass='login' />
                        <Link to="/" className="btn btn-forgotPassword">Forgot Password</Link>
                    </div>
                </div>
                {   this.props.modal.isOpenModal &&
                    ReactDOM.createPortal(
                    <Modal _toggleModal={this.props.toggleModal} />,
                    document.getElementById('registration-modal')
                    )
                }
            </div>
          )
    }
}

const mapStateToProps = state => ({
    modal: state.modal
})

const mapDispatchToProps = {
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
