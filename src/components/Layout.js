import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import Header from './Header/Header';
import IndexPage from './IndexPage';
import HomePage from '../containers/HomePage/';
import WidgetBar from '../containers/WidgetBar';
import Footer from './Footer/Footer';


const Layout = () => (
    <div className="app__layout">
            <Header />
            <WidgetBar />
            <Route exact path="/"  component={HomePage} />
            <Route exact path="/bills"  component={IndexPage} />
            <Footer />
    </div>
);

export default Layout;