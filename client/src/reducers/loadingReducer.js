import { 
    FETCH_SURVEYS_LOADING, FETCH_SURVEYS_LOADED, 
    FETCH_RECIPIENTS_LOADING, FETCH_RECIPIENTS_LOADED,
    SUBMIT_SURVEY_LOADING, SUBMIT_SURVEY_LOADED
} from '../actions/types';

export default function(state = false, action) {
    switch(action.type) {
        case FETCH_SURVEYS_LOADING:
            return true;
        case FETCH_SURVEYS_LOADED:
            return false;
        case FETCH_RECIPIENTS_LOADING:
            return true;
        case FETCH_RECIPIENTS_LOADED:
            return false;
        case SUBMIT_SURVEY_LOADING:
            return true;
        case SUBMIT_SURVEY_LOADED:
            return false;
        default:
            return state;
    }
}