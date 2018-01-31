import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

import LangSelect from '../LangSelect/LangSelect';

export const Navigation = (props) => (
    <div className="header__navigation">
        <div className="container">
            <nav className="navigation__list">
                <li className="list__item">
                    <NavLink exact activeClassName="active" className="list__link hover--gold" to="/">{props.vocabulary.navigation.all_games}</NavLink>
                </li>
                <li className="list__item">
                    <NavLink activeClassName="active" className="list__link hover--gold" to="/bills">{props.vocabulary.navigation.bill}</NavLink>
                </li>
                <li className="list__item">
                    <NavLink activeClassName="active" className="list__link hover--gold" to="/get-prize">{props.vocabulary.navigation.get_prize}</NavLink>
                </li>
                <li className="list__item">
                    <NavLink activeClassName="active" className="list__link hover--gold" to="/bonuses">{props.vocabulary.navigation.bonuses}</NavLink>
                </li>
                <li className="list__item">
                    <NavLink activeClassName="active" className="list__link hover--gold" to="/mobile-site">{props.vocabulary.navigation.mobile_version}</NavLink>
                </li>
                <li className="list__item">
                    <NavLink activeClassName="active" className="list__link hover--gold" to="/contacts">{props.vocabulary.navigation.contacts}</NavLink>
                </li>
            </nav>
            <div className="header__fast-registration">
                <div className="registration__btn hover--gold">
                    <i className="fa fa-bolt registration__bolt" aria-hidden="true"></i>
                    {props.vocabulary.buttons.quick_registration}
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
            <LangSelect 
                currentLang={props.currentLang}
                changeLang={props.changeLang} 
            />
        </div>
    </div>
)