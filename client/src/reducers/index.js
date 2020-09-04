import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import recipientReducer from './recipientReducer';
import loadingReducer from './loadingReducer';
import creditsLoadingReducer from './creditsLoadingReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    recipients: recipientReducer,
    loading: loadingReducer,
    creditsLoading: creditsLoadingReducer
});