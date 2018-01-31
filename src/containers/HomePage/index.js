import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

import WidgetBar from '../WidgetBar';
import { PromotionsSlider } from '../../components/PromotionsSlider/Promotions';
import games from './games';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: games,
            sortByPopularity: false,
            sortByAphabet: false
        }
    }

    /**
    |--------------------------------------------------
    | Search game
    |--------------------------------------------------
    */
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

    /**
    |--------------------------------------------------
    | Sort games by alphabet
    |--------------------------------------------------
    */
    _sortByAphabet = () => {
        let newArray = [...this.state.games];

        if(this.state.sortByAphabet) {
            newArray.sort(function(a, b){
                if(a.title < b.title) return 1;
                if(a.title > b.title) return -1;
                return 0;
            });
        } else {
            newArray.sort(function(a, b){
                if(a.title < b.title) return -1;
                if(a.title > b.title) return 1;
                return 0;
            });
        }

        this.setState(prevState => ({
            games: newArray,
            sortByAphabet: !prevState.sortByAphabet
        }))
    }

    /**
    |--------------------------------------------------
    | Sort games by popularity
    |--------------------------------------------------
    */
    _sortByPopularity = () => {
        let newArray = [...this.state.games];

        if(this.state.sortByPopularity) {
            newArray.sort(function(a, b){return b.rate - a.rate});
        } else {
            newArray.sort(function(a, b){return a.rate - b.rate});            
        }
        
        this.setState(prevState => ({
            games: newArray,
            sortByPopularity: !prevState.sortByPopularity
        }))
    }

    /**
    |--------------------------------------------------
    | Load more game
    |--------------------------------------------------
    */
    _loadMoreGames = () => {
        let fetchedGames = [...this.state.games];
        this.setState({
            games: [...this.state.games, ...fetchedGames]
        })
    }

    render() {
        const renderGames = () => (
            this.state.games.map((game, idx) => (
                <div key={idx} className="card">
                    <div className="card__image">
                        <img src={`${game.image}`} alt={`${game.title}`}/>  
                        <div className="inner-overlay">
                            <Link to={`game/id=${game.id}`} className="btn btn-default btn--blue">PLAY NOW</Link>
                            <button className="btn btn-default btn--red">DEMO</button>
                        </div>                      
                    </div>
                    <div className="card__game-title">{ game.title }</div>
                </div>
            ))
        )
        return (
            <div className="home-page">
                <div className="container">
                    <div className="games__wrapper">
                        <div className="games__header">
                            <div className="games__sort">
                                <span className="sort__text">Sort by: </span>
                                <span onClick={this._sortByPopularity} className="sort__byPopularity">Popularity</span>
                                <span className="divider">|</span>
                                <span onClick={this._sortByAphabet} className="sort__byAlphabet">a-z</span>
                            </div>
                            <div className="games__search">
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="search__input"
                                        onChange={this._searchGames}
                                        placeholder='Search for game ...'
                                    />
                                    <i className="fa fa-search text--gold" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="games__grid clearfix">
                            <div className="some-slider">
                                <PromotionsSlider />
                            </div>
                            { this.state.games !== undefined ? renderGames() : 'Can\'t fetch games from server :(' }
                        </div>
                        <div className="btn-wrapper">
                            <button 
                                className="btn btn--blue btn-default"
                                onClick={this._loadMoreGames}
                            >
                                load more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}