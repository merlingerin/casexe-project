import React, { Component } from 'react';

const IpItem = ({ip, removeAress}) => (
    <div className="ipAdress__item">
        <span>{ip}</span>
        <span 
            onClick={removeAress}
        >
            remove
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
            confirmPassword: '',
            ipAddresses: ["120.12.12.122", "120.12.12.122", "120.12.12.122"]
        }
    }

    renderIpAddress = () => {
        return (
            this.state.ipAddresses.map((item, idx) => {
                return <IpItem key={idx} ip={item} removeAress={() => this._handleRemoveAddress(idx)} />
            })
        )
    }

    _handleRemoveAddress = (idx) => {
        const removeItem = this.state.ipAddresses.splice(idx, 1);
        const newArray = this.state.ipAddresses.filter((item, idx) => (idx !== removeItem));

        this.setState({
            ipAddresses: newArray
        })
    }

    _handleAddAddress = () => {
        const validation = this.state.ipAddress.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/gi);

        if(validation === null) {
            const error = {...this.state.inputError, ipAddress: 'Not valid ip address'};
            
            this.setState({
                inputError: error
            })
        }
        else if(this.state.ipAddresses.indexOf(this.state.ipAddress) > -1 ) {
            const error = {...this.state.inputError, ipAddress: 'This ip Address already exist'};
            
            this.setState({
                inputError: error
            })
        }
        else if ( validation !== null && this.state.ipAddresses.indexOf(this.state.ipAddress) < 0 ) {
            const ipAddresses = [...this.state.ipAddresses, this.state.ipAddress ];
            this.setState({
                ipAddresses: ipAddresses
            })
        }
    }

    _preventInput = (event) => {
        let inputValue = event.which;
        let {target: { value, name }} = event;

        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0 && inputValue != 8)) { 
            const error = {...this.state.inputError, [name]: 'Just letter and spaces'};
            
            this.setState({
                inputError: error
            })
            event.preventDefault(); 
        } else {
            const error = {...this.state.inputError, [name]: ''};

            this.setState({
                inputError: error
            })
        }
    }

    // _validateEmail= (event) => {
    //     let {target: { value, name }} = event;
    //     var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    //     console.log('====================================');
    //     console.log(this.state.inputError, re.test(value));
    //     console.log('====================================');
    //     if (value !== '' && !re.test(value)){
    //         const error = {...this.state.inputError, [name]: 'Not a valid email'};

    //         this.setState({
    //             inputError: error
    //         })
    //     } else {
    //         const error = {...this.state.inputError, [name]: ''};

    //         this.setState({
    //             inputError: error
    //         })
    //     }
    // }

    _validateUserName = (event) => {
        let {target: { value, name }} = event;

        if(value.length > 0 && value.length <= 6) {
            const error = {...this.state.inputError, [name]: 'User name must be more then 6 symbols'};
            
            this.setState({
                inputError: error
            })
            return true;
        }
        if(value.length >= 16) {
            const error = {...this.state.inputError, [name]: 'User name must be less then 16 symbols'};
            
            this.setState({
                inputError: error
            })
            return true;
        }

        const error = {...this.state.inputError, [name]: 'Not a valid email'};

        this.setState({
            inputError: error
        })
    }

    _handleInput = ({target: { value, name }}) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <span className="modal__btn btn-close">
                        <i className="fa fa-times" aria-hidden="true"></i>
                        Close
                    </span>
                    <div className="modal__header">
                        <h4>Registration</h4>
                    </div>
                    <div className="modal__body">
                        <div className="input-group">
                            <label htmlFor="username">Name*</label>
                            <input 
                                name="username" 
                                type="text"
                                onKeyUp={this._validateUserName}
                                onKeyDown={this._preventInput}
                                onChange={this._handleInput}
                            />
                            { this.state.inputError.username ? 
                                (
                                    <div className="error-text">
                                        <span>{this.state.inputError.username}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="input-group">
                            <label htmlFor="ipAddress">Ip Address*</label>
                            <input 
                                name="ipAddress"
                                type="text"
                                onChange={this._handleInput}                                
                            />
                            <span
                                onClick={this._handleAddAddress}
                            >
                                <i className="fa fa-plus-square" aria-hidden="true"></i>
                                add IP
                            </span>
                            { this.state.inputError.ipAddress ? 
                                (
                                    <div className="error-text">
                                        <span>{this.state.inputError.ipAddress}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="ipAdree-container">
                            { this.renderIpAddress() }
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email*</label>
                            <input 
                                name="email" 
                                type="email"
                                onChange={this._validateEmail}
                            />
                            { this.state.inputError.email ? 
                                (
                                    <div className="error-text">
                                        <span>{this.state.inputError.email}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password*</label>
                            <input name="password" type="password"/>
                            { this.state.inputError.password ? 
                                (
                                    <div className="error-text">
                                        <span>{this.state.inputError.password}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password*</label>
                            <input name="confirmPassword" type="text"/>
                            { this.state.inputError.confirmPassword ? 
                                (
                                    <div className="error-text">
                                        <span>{this.state.inputError.confirmPassword}</span>
                                    </div>
                                ) :
                                ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}