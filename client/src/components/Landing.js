import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import yesNoImg from './../assets/yes-no-1.gif';
import bannerImg from './../assets/banner.png';

class Landing extends Component {

  render() {
    return (
      <div>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <h5>
            <TypistLoop interval={3000}>
              {[
                'Are you satisfied with the service?',
                'Are you new here?',
                'Are you satisfied using the application?',
                'Do you exercise regularly?',
                'Do you wish to use the application?',
                'Do you exercise once a week?',
                'Are you looking for a job?'
              ].map(text => <Typist key={text} startDelay={1000} avgTypingDelay={140}>{text}</Typist>)}
            </TypistLoop>
          </h5>
          <br />
          <br />
          <div>
            <img src={yesNoImg} height="15%" width="15%" alt="yes-no-1" />
          </div>
          <h5>Collect feedback from the users</h5>
          <br />
          <br />
          <br />
          <br />
          <a href="https://github.com/karthik-s-k/FeedbackSystem">Git repository</a>
          <div>
            <img src={bannerImg} height="150px" width="700px" alt="banner" />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;