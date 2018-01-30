import React, { Component } from 'react';
import Slider from 'react-slick';
import './LastWinners.css';

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const sliderContent = [
    {
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-1.jpg`)})`,
        contentText: {
            game: 'Lorem 1',
            prize: 153,
            palyerName: 'Player 1'
        }
    }, {
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-2.jpg`)})`,
        contentText: {
            game: 'Lorem 2',
            prize: 126,
            palyerName: 'Player 2'
        }
    }, {
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-3.jpg`)})`,
        contentText: {
            game: 'Lorem 3',
            prize: 111,
            palyerName: 'Player 3'
        }
    },
    {
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-1.jpg`)})`,
        contentText: {
            game: 'Lorem 1',
            prize: 153,
            palyerName: 'Player 1'
        }
    }, {
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-2.jpg`)})`,
        contentText: {
            game: 'Lorem 2',
            prize: 126,
            palyerName: 'Player 2'
        }
    }, {
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-3.jpg`)})`,
        contentText: {
            game: 'Lorem 3',
            prize: 111,
            palyerName: 'Player 3'
        }
    }
];

const container = { margin: '0 auto', padding: '40px', width: '50%', color: '#333', background: '#419be0'};

export const LastWinners = (props) => (
    <div className="last-winners">
        <h4 className="last-winners__title text--gold">{props.title || 'Last Winners'}</h4>
        <div className="slider-container">
            <Slider
                    className=""
                    {...settings}
                >
                {
                    sliderContent.map((item, idx) => {
                        return (
                            <div 
                                className="slide__wrapper"
                                key={idx} 
                            >
                                <div className="slide__card">
                                    <i className="card__image"
                                        style={{
                                            backgroundImage: item.contentImage,
                                        }}
                                    ></i>
                                    <ul className="card__content">
                                        <li className="game-title">{item.contentText.game}</li>
                                        <li className="prize">{item.contentText.prize} $</li>
                                        <li className="player-name">{item.contentText.palyerName}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
)
