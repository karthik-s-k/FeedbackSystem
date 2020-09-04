import React, { Component } from 'react';
import ReactSpinner from 'react-bootstrap-spinner';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchUser(true, this.props.history);
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
          return (
              <div className="card darken-1" key={survey._id}>
                <Link to={"/recipientList/" + survey._id} style={{ textDecoration: 'none' }}>
                  <div className="card-content">
                    <span className="card-title">{survey.title}</span>
                    <p>
                      {survey.body}
                    </p>
                    <p className="right">
                      Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="card-action">
                    <div>Yes: {survey.yes}</div>
                    <div>No: {survey.no}</div>
                  </div>                
                </Link>
              </div>
          );
        });
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
                  this.renderSurveys() 
                }
            </div>
        );
    }
}

function mapStateToProps({ surveys, loading }) {
    return { surveys, loading };
}

export default connect(mapStateToProps, { fetchUser, fetchSurveys })(withRouter(SurveyList));