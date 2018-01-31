import {
    CHANGE_LANG
} from '../constants';

import { ru_lang } from '../lang/RU';
import { en_lang } from '../lang/EN';

const initialState = {
    current_lang: 'RU',
    vocabulary: ru_lang
};

const lang = ( state = initialState || {}, action ) => {
    switch (action.type) {
        case CHANGE_LANG:
            const vocabulary = action.payload === 'EN' ? en_lang : ru_lang
            return state = {
                ...state,
                current_lang: action.payload,
                vocabulary: vocabulary
            }
        default:
            return state;
    }
}

export default lang;