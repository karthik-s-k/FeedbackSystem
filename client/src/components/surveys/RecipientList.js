import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchRecipients } from '../../actions';

class RecipientList extends Component {
    componentDidMount(){
        var surveyId = (this.props.location.pathname).replace("/recipientList/", ''); 
        this.props.fetchRecipients(surveyId);
    }

    renderRecipients() {
        return this.props.recipients && this.props.recipients.map(recipient => {
            var email = recipient.email;
            var status = recipient.responded ? " has responded to the survey": " is yet to respond to the survey";
            return (
                <div className="card darken-1" key={recipient.email}>
                    {
                        recipient.responded ? 
                            <div className="card-content" style={{ background: '#d0ffc9' }}>
                                <p>{email + " " + status}</p>
                            </div>
                            :
                            <div className="card-content" style={{ background: '#fcd6d2' }}>
                                <p>{email + " " + status}</p>
                            </div>
                    }                    
                </div>
            );
        });
      }

    render() {
        return (
            <div>
                <h5>Recipients of the survey</h5>
                { this.renderRecipients() }
                <Route render={({ history}) => (
                    <button
                        className="yellow darken-3 white-text btn-flat"
                        onClick={() => { history.push('/surveys') }}
                    >
                    Back
                    </button>
                )} />
            </div>
        );
    }
}

function mapStateToProps({ recipients }) {
    return { recipients };
}

export default connect(mapStateToProps, { fetchRecipients })(RecipientList);