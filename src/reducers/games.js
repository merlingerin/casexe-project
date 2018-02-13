import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,    
    LOAD_MORE_GAMES_REQUEST,
    LOAD_MORE_GAMES_SUCCESS,
    LOAD_MORE_GAMES_FAILURE
} from '../actionTypes';

const initialState = {
    games: [],
    fetching: false,
    fetchingMoreGame: false,
    error: null
};

const games = (state = initialState || {}, action) => {
    switch(action.type) {
        case FETCH_GAMES_REQUEST:
            return { ...state, fetching: true }

        case FETCH_GAMES_SUCCESS:
            return { ...state, games: action.payload, fetching: false }

        case FETCH_GAMES_FAILURE:
            return { ...state, error: action.payload, fetching: false }

        case LOAD_MORE_GAMES_REQUEST:
            return { ...state, fetchingMoreGames: true }

        case LOAD_MORE_GAMES_SUCCESS:
            return { ...state, games: [...state.games, ...action.payload], fetchingMoreGames: false }
        
        case LOAD_MORE_GAMES_FAILURE:
            return { ...state, error: action.payload, fetchingMoreGames: false }        
            
        default:
            return state;
    }
}

export default games;