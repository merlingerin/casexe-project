import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <ul className="footer__links-list">
                <li><Link to="/another-url" className="links-list__link">ABOUT CASINO</Link></li>
                <li><Link to="/another-url" className="links-list__link">TERMS AND CONDITIONS</Link></li>
                <li><Link to="/another-url" className="links-list__link">RESPONSIBLE GAMING</Link></li>
                <li><Link to="/another-url" className="links-list__link">CONTACT US </Link></li>
            </ul>
            <ul className="footer__partners-list">
                <li><a href="javascript:void(0);" className="partners-list__link partner--visa"> </a></li>
                <li><a href="javascript:void(0);" className="partners-list__link partner--paypal"> </a></li>
                <li><a href="javascript:void(0);" className="partners-list__link partner--cash"> </a></li>
                <li><a href="javascript:void(0);" className="partners-list__link partner--bank"> </a></li>
            </ul>
        </div>
    </div>
);

export default Footer;
