import { 
    TOGGLE_MODAL,
    CHANGE_LANG
} from '../constants';

export const toggleModal = () => ({
    type: TOGGLE_MODAL,
    payload: ''
});

export const changeLang = (lang) => {
    return {
        type: CHANGE_LANG,
        payload: lang
    }
};