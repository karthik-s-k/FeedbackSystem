import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Recipients from './surveys/RecipientList';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/surveys/#" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                        <Route path="/recipientList/:surveyId" component={Recipients} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions) (App);