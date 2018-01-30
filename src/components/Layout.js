import React from 'react';
import {
    Route
} from 'react-router-dom';

import Header from './Header/Header';
import HomePage from '../containers/HomePage/';
import WidgetBar from '../containers/WidgetBar';


const Layout = () => (
    <div className="app__layout">
            <Header />
            <WidgetBar />
            <Route exact path="/"  component={HomePage} />
    </div>
);

export default Layout;