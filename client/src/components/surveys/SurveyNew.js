import React, { Component } from 'react';
import ReactSpinner from 'react-bootstrap-spinner';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false }

    renderContent() {
        if (this.state.showFormReview){
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
        }

        return (
            <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
        );
    }

    render() {
        return (
            <div>
                { 
                this.props.loading ? 
                  <div style={{ margin: '20% 0% 0% 43%' }}>
                    <ReactSpinner type="grow" color="primary" size="3" />
                    <ReactSpinner type="grow" color="warning" size="3" />
                    <ReactSpinner type="grow" color="danger" size="3" />
                  </div>
                  : 
                  this.renderContent() 
                }
            </div>
        );
    }    
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);