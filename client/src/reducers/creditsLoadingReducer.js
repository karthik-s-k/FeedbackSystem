import { SUBMIT_TOKEN_LOADING, SUBMIT_TOKEN_LOADED}  from '../actions/types';

export default function(state = false, action) {
    switch(action.type) {
        case SUBMIT_TOKEN_LOADING:
            return true;
        case SUBMIT_TOKEN_LOADED:
            return false;
        default:
            return state;
    }
}