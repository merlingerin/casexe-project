import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import './Promotions.css';

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1
};

const sliderContent = [
    {
        contentImage: `${require('../../assets/images/sliders/promotions/promotions-slide-1.jpg')}`,
        contentText: {
            slideTitle: 'REACH FOR THE STARS WITH UP TO 200 FREE SPINS',
            slideDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt leo malesuada eros elementum eget eu ligula.'
        }
    }, {
        contentImage: `${require('../../assets/images/sliders/promotions/promotions-slide-1.jpg')}`,
        contentText: {
            slideTitle: 'REACH FOR THE STARS WITH UP TO 200 FREE SPINS',
            slideDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt leo malesuada eros elementum eget eu ligula.'
        }
    }, {
        contentImage: `${require('../../assets/images/sliders/promotions/promotions-slide-1.jpg')}`,
        contentText: {
            slideTitle: 'REACH FOR THE STARS WITH UP TO 200 FREE SPINS',
            slideDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt leo malesuada eros elementum eget eu ligula.'
        }
    }
];

export const PromotionsSlider = (props) => {

    return (
        <div className="promotions-slider">
            <Link to="/promotions" className="promotions-slider__title">{props.title || 'Promotions'}</Link>
            <div className="slider-container">
                <Slider
                        className=""
                        {...settings}
                    >
                    {
                        sliderContent.map((item, idx) => {
                            return (
                                <a
                                    href="javascript:void(0)" 
                                    className="slide__wrapper"
                                    key={idx} 
                                >
                                    <div 
                                        className="slide__card"
                                        style={{
                                            backgroundImage: `url(${item.contentImage})`,
                                        }}
                                    >
                                        <ul className="card__content">
                                            <li className="slider-title" data-text={item.contentText.slideTitle}>{item.contentText.slideTitle}</li>
                                            <li className="slider-description">{item.contentText.slideDescription}</li>
                                        </ul>
                                    </div>
                                </a>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}