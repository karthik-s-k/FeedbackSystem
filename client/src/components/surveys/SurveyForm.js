import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import { fetchUser } from '../../actions';

class SurveyForm extends Component {
    componentDidMount(){
        this.props.fetchUser(true, this.props.history);
    }

    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    { this.renderFields() }
                    <Link to="/surveys">
                        <button className="red btn-flat white-text">
                            Cancel
                            <i className="material-icons right">clear</i>
                        </button>
                    </Link>                    
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }    
}

function validate(values) {
    const errors = {};

    _.each(formFields, ( { name }) => {
        if (!values[name]) {
            errors[name] = "This field can not be blank"
        }
    });

    errors.recipients = validateEmails(values.recipients || '');

    return errors;
}

SurveyForm = connect(
    null,
    { fetchUser }
)(withRouter(SurveyForm));

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);