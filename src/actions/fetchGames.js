import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    LOAD_MORE_GAMES_REQUEST,
    LOAD_MORE_GAMES_SUCCESS,
    LOAD_MORE_GAMES_FAILURE
} from '../actionTypes';
import { fetchGames as fetchGamesApi } from '../api';
import { loadMoreGames as loadMoreGamesApi } from '../api';

export const fetchGames = () => async (dispatch) => {
    dispatch({type: FETCH_GAMES_REQUEST})

    try {
        const games = await fetchGamesApi().then(res => res)
        dispatch({
            type: FETCH_GAMES_SUCCESS,
            payload: games
        })
    } catch (error) {
        dispatch({
            type: FETCH_GAMES_FAILURE,
            payload: error,
            error: true
        })

    }
}

export const loadMoreGames = () => async (dispatch) => {
    dispatch({type: LOAD_MORE_GAMES_REQUEST})

    try {
        const games = await loadMoreGamesApi().then(res => res)
        dispatch({
            type: LOAD_MORE_GAMES_SUCCESS,
            payload: games
        })
    } catch (error) {
        dispatch({
            type: LOAD_MORE_GAMES_FAILURE,
            payload: error,
            error: true
        })

    }
}
