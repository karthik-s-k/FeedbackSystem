import axios from 'axios';
import { 
    FETCH_USER,
    FETCH_SURVEYS, FETCH_SURVEYS_LOADING, FETCH_SURVEYS_LOADED,
    FETCH_RECIPIENTS, FETCH_RECIPIENTS_LOADING, FETCH_RECIPIENTS_LOADED,
    SUBMIT_SURVEY_LOADING, SUBMIT_SURVEY_LOADED,
    SUBMIT_TOKEN_LOADING, SUBMIT_TOKEN_LOADED
} from './types';


export const fetchUser = (verify, history) => async dispatch => {
    const res = await axios.get('/api/current_user');

    if (verify && (res.data === null || res.data === undefined || res.data === "")) {
        history.push('/api/logout');
        history.push('/');
    }

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    dispatch({ type: SUBMIT_TOKEN_LOADING });
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch({ type: SUBMIT_TOKEN_LOADED, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    dispatch({ type: SUBMIT_SURVEY_LOADING });
    
    try {
        const res = await axios.post('/api/surveys', values);
        history.push('/surveys');

        dispatch({ type: FETCH_USER, payload: res.data });
        dispatch({ type: SUBMIT_SURVEY_LOADED, payload: res.data });
    }
    catch(ex) {        
        dispatch({ type: FETCH_USER, payload: "" });
        dispatch({ type: SUBMIT_SURVEY_LOADED, payload: "" });
    }
};

export const fetchSurveys = () => async dispatch => {
    dispatch({ type: FETCH_SURVEYS_LOADING });
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
    dispatch({ type: FETCH_SURVEYS_LOADED, payload: res.data });
};

export const fetchRecipients = (surveyId) => async dispatch => {
    dispatch({ type: FETCH_RECIPIENTS_LOADING });
    const res = await axios.get('/api/recipients/' + surveyId);

    dispatch({ type: FETCH_RECIPIENTS, payload: res.data });
    dispatch({ type: FETCH_RECIPIENTS_LOADED, payload: res.data });
};