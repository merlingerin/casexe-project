import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

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
        id: 1,
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-1.jpg`)})`,
        contentText: {
            game: 'Lorem 1',
            prize: 153,
            palyerName: 'Player 1'
        }
    }, {
        id: 2,        
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-2.jpg`)})`,
        contentText: {
            game: 'Lorem 2',
            prize: 126,
            palyerName: 'Player 2'
        }
    }, {
        id: 3,
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-3.jpg`)})`,
        contentText: {
            game: 'Lorem 3',
            prize: 111,
            palyerName: 'Player 3'
        }
    },
    {
        id: 4,
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-1.jpg`)})`,
        contentText: {
            game: 'Lorem 1',
            prize: 153,
            palyerName: 'Player 1'
        }
    }, {
        id: 5,
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-2.jpg`)})`,
        contentText: {
            game: 'Lorem 2',
            prize: 126,
            palyerName: 'Player 2'
        }
    }, {
        id: 6,
        contentImage: `url(${require(`../../assets/images/sliders/last-winners/last-winners-3.jpg`)})`,
        contentText: {
            game: 'Lorem 3',
            prize: 111,
            palyerName: 'Player 3'
        }
    }
];

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
                            <Link to={`player/id=${item.id}`}
                                className="slide__wrapper"
                                key={item.id} 
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
                            </Link>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
)
