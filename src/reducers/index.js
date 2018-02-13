import { combineReducers } from 'redux';

import modal from './modal';
import lang from './lang';
import games from './games';

export default combineReducers({
    modal,
    lang,
    games
});