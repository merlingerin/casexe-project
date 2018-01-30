import React, { Component } from 'react';
import Slider from 'react-slick';

export default class HeaderSlider extends Component {
  render() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderContent = [
        {
            contentBackground: `url(${require(`../../../assets/images/sliders/header-slide-1.jpg`)})`,
            contentImage: `${require(`../../../assets/images/sliders/home-slide-1.png`)}`,
            contentText: ''
        }, {
            contentBackground: `url(${require(`../../../assets/images/sliders/header-slide-1.jpg`)})`,
            contentImage: `${require(`../../../assets/images/sliders/home-slide-1.png`)}`,
            contentText: ''
        }, {
            contentBackground: `url(${require(`../../../assets/images/sliders/header-slide-1.jpg`)})`,
            contentImage: `${require(`../../../assets/images/sliders/home-slide-1.png`)}`,
            contentText: ''
        }
    ];

    return (
        <Slider
            className="header__carusel"
            {...settings}
        >
        {
            sliderContent.map((item, idx) => {
                return (
                    <div 
                        className="slide__wrapper"
                        key={idx} 
                        style={{
                            backgroundImage: item.contentBackground,
                        }}
                    >
                        <div className="container">
                            <img className="slide__content-image" src={item.contentImage} />
                        </div>
                    </div>
                )
            })
        }
        </Slider>
    )
  }
}

