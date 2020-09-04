import React, { Component } from 'react';
import ReactSpinner from 'react-bootstrap-spinner';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchUser, fetchRecipients } from '../../actions';

class RecipientList extends Component {
    componentDidMount(){
        this.props.fetchUser(true, this.props.history);
        
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
                { 
                this.props.loading ? 
                  <div style={{ margin: '20% 0% 20% 43%' }}>
                    <ReactSpinner type="grow" color="primary" size="3" />
                    <ReactSpinner type="grow" color="warning" size="3" />
                    <ReactSpinner type="grow" color="danger" size="3" />
                  </div>
                  : 
                  this.renderRecipients() 
                }
                <Route render={({ history }) => (
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

function mapStateToProps({ recipients, loading }) {
    return { recipients, loading };
}

export default connect(mapStateToProps, { fetchUser, fetchRecipients })(withRouter(RecipientList));