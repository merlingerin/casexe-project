import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

import LangSelect from '../LangSelect/LangSelect';

export const Navigation = () => (
    <div className="header__navigation">
        <div className="container">
            <nav className="navigation__list">
                <li className="list__item"><Link className="list__link hover--gold" to="/">ВСЕ ИГРЫ</Link></li>
                <li className="list__item"><Link className="list__link hover--gold" to="/">ПОПОЛНЕНИЕ СЧЕТА</Link></li>
                <li className="list__item"><Link className="list__link hover--gold" to="/">ПОЛУЧИТЬ ВЫИГРЫШ</Link></li>
                <li className="list__item"><Link className="list__link hover--gold" to="/">БОНУСЫ</Link></li>
                <li className="list__item"><Link className="list__link hover--gold" to="/">МОБИЛЬНАЯ ВЕРСИЯ</Link></li>
                <li className="list__item"><Link className="list__link hover--gold" to="/">КОНТАКТЫ</Link></li>
            </nav>
            <div className="header__fast-registration">
                <div className="registration__btn hover--gold">
                    <i className="fa fa-bolt registration__bolt" aria-hidden="true"></i>
                    БЫСТРАЯ РЕГИСТРАЦИЯ
                </div>
            </div>
            <div className="header__social-links social-links">
                <ul className="social-links__list">
                    <li className="list__item">
                        <Link to="/" className="item__link">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li className="list__item">
                        <Link to="/" className="item__link">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li className="list__item">
                        <Link to="/" className="item__link">
                            <i className="fa fa-vk" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <LangSelect />
        </div>
    </div>
)