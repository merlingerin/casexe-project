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
            <Route path="/bills"  component={IndexPage} />
            <Route path="/get-prize"  component={IndexPage} />
            <Route path="/bonuses"  component={IndexPage} />
            <Route path="/mobile-site"  component={IndexPage} />
            <Route path="/contacts"  component={IndexPage} />
            <Route path="/game/id=:id"  render={({match}) => <div className="container"><h1>Game id = {match.params.id}</h1></div>} />            
            <Route path="/player/id=:id"  render={({match}) => <div className="container"><h1>Player id = {match.params.id}</h1></div>} />            
            <Footer />
    </div>
);

export default Layout;