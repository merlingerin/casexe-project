import React from 'react';
import {
    Route,
    Switch,
    NavLink
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
            <Route exact path="/get-prize"  component={IndexPage} />
            <Route exact path="/bonuses"  component={IndexPage} />
            <Route exact path="/mobile-site"  component={IndexPage} />
            <Route exact path="/contacts"  component={IndexPage} />
            <Route exact path="/game/id=:id"  render={({match}) => <h1>Game id = {match.params.id}</h1>} />            
            <Footer />
    </div>
);

export default Layout;