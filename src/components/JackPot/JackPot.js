import React, { Component } from 'react';
import './JackPot.css';

const coins = [
    {
        id: 1,
        title: 'gold',
        type: 'gold',
        value: '12516',
        interval: 1000,
        increseTo: 11,                
        image: `url(${require(`../../assets/images/jack-pot/golden-coin.png`)})`
    }, {
        id: 2,        
        title: 'silver',
        type: 'silver',        
        value: '9139',
        interval: 500,
        increseTo: 53,        
        image: `url(${require(`../../assets/images/jack-pot/silver-coin.png`)})`
    }, {
        id: 3,        
        title: 'bronze',
        type: 'bronze',        
        value: '5561',
        interval: 700,
        increseTo: 71,
        image: `url(${require(`../../assets/images/jack-pot/bronze-coin.png`)})`
    }
]

class CoinValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: +this.props.value,
            interval: +this.props.interval,
            increseTo: +this.props.increseTo            
        }
    }

    componentDidMount() {
        setInterval(() => this.changeValue(), this.state.interval);
    }

    changeValue = () => {

        this.setState((prevState) => ({
            value: prevState.value += prevState.increseTo
        }))
    }

    render() {
        return (
            <span className="card__text coin-value">{ this.state.value }</span>
        )
    }
}

export const JackPot = (props) => (
    <div className="jack-pot">
        <h4 className="jack-pot__title text--gold">{ props.title || 'Jack Pot' }</h4>
        <div className="jack-pot__container">
            {
                coins.map((item,idx) => (
                    <div key={item.id} className={`jack-pot__card card-${item.type}`}>
                        <i 
                            className="card__image coin-image"
                            style={{
                                backgroundImage: item.image
                            }}
                        ></i>
                        <CoinValue 
                            value={item.value}
                            increseTo={item.increseTo}
                            interval={item.interval}
                         />
                    </div>
                ))
            }
        </div>
    </div>
)