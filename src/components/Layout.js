import React from 'react';
import {
    Route
} from 'react-router-dom';

import Header from './Header/Header';
import HomePage from '../containers/HomePage/';

const Layout = () => (
    <div className="app__layout">
            <Header />
            <Route exact path="/"  component={HomePage} />
    </div>
);

export default Layout;