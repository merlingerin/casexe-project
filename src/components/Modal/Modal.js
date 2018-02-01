import React, { Component } from 'react';
import './Modal.css';

const IpItem = ({ip, removeAress, btnText}) => (
    <div className="ipAdress__item">
        <span className="ipAdress__text" >{ip}</span>
        <span 
            className="ipAdress__btn btn-removeIpAddress"
            onClick={removeAress}
        >
            <i className="icon-remove">&times;</i>
            {btnText}
        </span>
    </div>
)

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ipAddress: '',
            username: '',
            password: '',
            inputError: {},
            modalErrors: [],
            confirmPassword: '',
            ipAddresses: ["120.12.12.122", "120.12.12.122"]
        }
    }

    /**
    |--------------------------------------------------
    | Render ip addresses from state
    |--------------------------------------------------
    */
    renderIpAddress = () => {
        return (
            this.state.ipAddresses.map((item, idx) => {
                return <IpItem key={idx} ip={item} btnText={this.props.vocabulary.modal.remove} removeAress={() => this._handleRemoveAddress(idx)} />
            })
        )
    }

    /**
    |--------------------------------------------------
    | Remove addres from address list
    |--------------------------------------------------
    */
    _handleRemoveAddress = (idx) => {
        const removeItem = this.state.ipAddresses.splice(idx, 1);
        const newArray = this.state.ipAddresses.filter((item, idx) => (idx !== removeItem));

        this.setState({
            ipAddresses: newArray
        })
    }

    /**
    |--------------------------------------------------
    | Validation for ip address on blank
    |--------------------------------------------------
    */
    _validationIpAddress = (event) => {
        let {target: { value, name }} = event;

        if(value === '') {
            const error = {...this.state.inputError, ipAddress: ''};
            
            this.setState({
                inputError: error
            })
            return true;
        }

    }

    /**
    |--------------------------------------------------
    |  Add address to address list and validation
    |--------------------------------------------------
    */
    _handleAddAddress = () => {
        const validation = this.state.ipAddress.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/gi);

        if(validation === null) {
            const error = {...this.state.inputError, ipAddress: 'Not valid ip address'};
            
            this.setState({
                inputError: error
            })
            return true;
            
        }
        else if(this.state.ipAddresses.indexOf(this.state.ipAddress) > -1 ) {
            const error = {...this.state.inputError, ipAddress: 'You have already entered this IP address.'};
            
            this.setState({
                inputError: error
            })
            return true;
            
        }
        else if ( this.state.ipAddresses.length >= 5 ) {
            const error = {...this.state.inputError, ipAddress: 'Maximum 5 Ip addresses'};
            
            this.setState({
                inputError: error
            })
            return true;
            
        }
        else if ( validation !== null && this.state.ipAddresses.indexOf(this.state.ipAddress) < 0 && this.state.ipAddresses.length < 5 ) {
            const ipAddresses = [...this.state.ipAddresses, this.state.ipAddress ];
            const error = {...this.state.inputError, ipAddress: ''};
            
            this.setState({
                ipAddresses: ipAddresses,
                inputError: error
            })
            return true;
            
        }
    }

    /**
    |--------------------------------------------------
    | Prevent input numbers and symbols to user name
    |--------------------------------------------------
    */
    _preventInput = (event) => {
        let inputValue = event.which;
        let {target: { value, name }} = event;

        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue !== 32 && inputValue !== 0 && inputValue !== 8)) { 
            event.preventDefault(); 
            return true;
        }
    }

    /**
    |--------------------------------------------------
    | Validation for email
    |--------------------------------------------------
    */
    _validateEmail= (event) => {
        let {target: { value, name }} = event;
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

        if (value !== '' && !re.test(value)){
            const error = {...this.state.inputError, [name]: 'Not a valid email'};

            this.setState({
                inputError: error
            });

            return true;
        } 

        const error = {...this.state.inputError, [name]: ''};

        this.setState({
            inputError: error
        })
    }

    /**
    |--------------------------------------------------
    | Validation for user name on blank
    |--------------------------------------------------
    */
    _validateUserName = (event) => {
        let {target: { value, name }} = event;

        const error = {...this.state.inputError, [name]: ''};

        this.setState({
            inputError: error
        })
    }

    /**
    |--------------------------------------------------
    | Validation password: min.value > 5, max.value < 17
    |--------------------------------------------------
    */
    _validatePassword = (event) => {
        let {target: { value, name }} = event;
        
        if(value.length > 0 && value.length < 6) {
            const error = {...this.state.inputError, [name]: 'Password must be more then 6 symbols'};
            
            this.setState({
                inputError: error
            })
            return true;
        }

        if(value.length > 16) {
            const error = {...this.state.inputError, [name]: 'Password must be less then 16 symbols'};
            
            this.setState({
                inputError: error
            })
            return true;
        }

        const error = {...this.state.inputError, [name]: ''};

        this.setState({
            inputError: error
        })
    }

    /**
    |--------------------------------------------------
    | Validation confirm password
    |--------------------------------------------------
    */
    _validateConfirmPassword = (event) => {
        let {target: { value, name }} = event;
        let password = this.state.password;

        if( value !== password ) {
            const error = {...this.state.inputError, [name]: 'The password and confirm password don\'t match'};
            
            this.setState({
                inputError: error
            })
            return true;
        }

        const error = {...this.state.inputError, [name]: ''};

        this.setState({
            inputError: error
        })
    }

    /**
    |--------------------------------------------------
    | Data binding input to state onChange
    |--------------------------------------------------
    */
    _handleInput = ({target: { value, name }}) => {
        this.setState({
            [name]: value
        })
    }

    /**
    |--------------------------------------------------
    | Submit action;
    | Check on errors and prepare data for post
    |--------------------------------------------------
    */
    _handleSubmit = () => {
        let { username, password, confirmPassword, email } = this.state;
        let { ipAddresses } = this.state;
        let modalErrors = [];

        if( username === '' || password === '' || confirmPassword === '' || email === '' ) {
            let error = 'All fields are required';
            modalErrors = [...modalErrors, error];
        }

        if ( ipAddresses.length < 1 ) {
            let error = 'Add at least one address';
            modalErrors = [...modalErrors, error];
        }

        for (const key in this.state.inputError) {
            if(this.state.inputError[key] !== '') {
                modalErrors = [...modalErrors, this.state.inputError[key]]
            }
        }

        if( modalErrors.length < 1 ) {
            let sendRequest = {
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            };
            this.setState({
                modalErrors: []
            })
            alert(JSON.stringify(sendRequest));
        } else {
            this.setState({
                modalErrors: modalErrors
            })
        }

    }

    /**
    |--------------------------------------------------
    | Close modal
    |--------------------------------------------------
    */
    _handleClose = () => {
        this.setState({
            ipAddress: '',
            username: '',
            password: '',
            inputError: {},
            modalErrors: [],
            confirmPassword: ''
        });
        this.props._toggleModal();
    }

    render() {

        let ModalErrors = () => (
            <ul className="modal-errors__list">
                {
                    this.state.modalErrors.map((item, idx) => (
                        <li key={idx} className="modal-errors__item">
                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <span className="modal-error">{ item }
                            </span>
                        </li>
                    ))
                }
            </ul>
        )

        return (
            <div className="modal-wrapper">
                <div className="overlay"
                    onClick={this._handleClose}
                ></div>
                <div className="modal clearfix animated bounceIn">
                    <div 
                        className="modal__btn btn-close"
                        onClick={this._handleClose}
                    >
                        <i className="fa fa-times btn-close__icon" aria-hidden="true"></i>
                        <span className="btn-close__text mobile-hidden">{this.props.vocabulary.modal.close}</span>
                    </div>
                    <div className="modal__header">
                        <h4>{this.props.vocabulary.modal.registration}</h4>
                        <ModalErrors />
                    </div>
                    <div className="modal__body">
                        <div className="input-group">
                            <label htmlFor="username">{this.props.vocabulary.modal.name}*</label>
                            <input 
                                className={`${this.state.inputError.username ? 'error animated shake' : ''}`}
                                name="username" 
                                type="text"
                                onKeyUp={this._validateUserName}
                                onKeyDown={this._preventInput}
                                onChange={this._handleInput}
                                placeholder={`${this.props.vocabulary.modal.name}*`}
                                required
                            />
                            { this.state.inputError.username ? 
                                (
                                    <div className="error-text">
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                        <span>{this.state.inputError.username}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="input-group">
                            <label htmlFor="ipAddress">{this.props.vocabulary.modal.ipAddress}*</label>
                            <input 
                                className={`${this.state.inputError.ipAddress ? 'error animated shake' : ''}`}                            
                                name="ipAddress"
                                type="tel"
                                onChange={this._handleInput}
                                onKeyUp={this._validationIpAddress}
                                placeholder={`${this.props.vocabulary.modal.ipAddress}*`}
                            />
                            <span
                                className="btn-addIpAddress"
                                onClick={this._handleAddAddress}
                            >
                                <i className="fa fa-plus-square" aria-hidden="true"></i>
                                {this.props.vocabulary.modal.addIp}
                            </span>
                            { this.state.inputError.ipAddress ? 
                                (
                                    <div className="error-text">
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                        <span>{this.state.inputError.ipAddress}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="ipAdreess-container">
                            { this.renderIpAddress() }
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">{this.props.vocabulary.modal.email}*</label>
                            <input 
                                className={`${this.state.inputError.email ? 'error  animated shake' : ''}`}                            
                                name="email" 
                                type="email"
                                onChange={this._handleInput && this._validateEmail}     
                                placeholder={`${this.props.vocabulary.modal.email}*`}                           
                                required
                            />
                            { this.state.inputError.email ? 
                                (
                                    <div className="error-text">
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                        <span>{this.state.inputError.email}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">{this.props.vocabulary.modal.password}*</label>
                            <input 
                                className={`${this.state.inputError.password ? 'error  animated shake' : ''}`}                            
                                name="password" 
                                type="password" 
                                required
                                onKeyUp={this._validatePassword}
                                onChange={this._handleInput}
                                placeholder={`${this.props.vocabulary.modal.password}*`}
                            />
                            { this.state.inputError.password ? 
                                (
                                    <div className="error-text">
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                        <span>{this.state.inputError.password}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">{this.props.vocabulary.modal.confirmPassword}*</label>
                            <input 
                                className={`${this.state.inputError.confirmPassword ? 'error  animated shake' : ''}`}                            
                                name="confirmPassword" 
                                type="password" 
                                onKeyUp={this._validateConfirmPassword}
                                onChange={this._handleInput}
                                placeholder={`${this.props.vocabulary.modal.confirmPassword}*`}                                
                                required 
                            />
                            { this.state.inputError.confirmPassword ? 
                                (
                                    <div className="error-text">
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                        <span>{this.state.inputError.confirmPassword}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <button
                            className="modal__btn-submit btn-default btn--blue"
                            type="submit"
                            onClick={this._handleSubmit}
                        >
                            {this.props.vocabulary.modal.submit}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}