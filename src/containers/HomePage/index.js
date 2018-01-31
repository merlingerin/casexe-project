import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

import WidgetBar from '../WidgetBar';
import games from './games';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: games
        }
    }

    _searchGames = (event) => {
        let allGames = games;
        let input = event.target.value;
        let filteredGames = allGames.filter((item, idx) => {
            return item.title.toUpperCase().indexOf(input.toUpperCase()) !== -1;
        });

        this.setState({
            games: filteredGames
        })
    }

    render() {
        const renderGames = () => (
            this.state.games.map((game, idx) => (
                <Link to={`id=${game.id}`} key={game.id} className="card">
                    <div className="card__image">
                        <img src={`${game.image}`} alt={`${game.title}`}/>                        
                    </div>
                    <div className="card__game-title">{ game.title } { game.id }</div>
                </Link>
            ))
        )
        return (
            <div className="home-page">
                <div className="container">
                    <div className="games__wrapper">
                        <div className="games__header">
                            <div className="games__sort">
                                <span className="sort__text">Sort by: </span>
                                <span className="sort__byPopularity">Popularity</span>
                                <span className="divider">|</span>
                                <span className="sort__byAlphabet">a-z</span>
                            </div>
                            <div className="games__search">
                                <input 
                                    type="text" 
                                    className="search__input"
                                    onChange={this._searchGames}
                                />
                            </div>
                        </div>
                        <div className="games__grid">
                            <div className="some-slider">SLIDER</div>
                            { this.state.games !== undefined ? renderGames() : 'Can\'t fetch games from server :(' }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}