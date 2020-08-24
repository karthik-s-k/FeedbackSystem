import { FETCH_RECIPIENTS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_RECIPIENTS:
            return action.payload[0].recipients || false;
        default:
            return state;
    }
}