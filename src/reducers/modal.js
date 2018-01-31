import {
    TOGGLE_MODAL
} from '../constants';

const initialState = {
    isOpenModal: false
};

const modal = ( state = initialState || {}, action ) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return state = {
                isOpenModal: !state.isOpenModal
            }
        default:
            return state;
    }
}

export default modal;