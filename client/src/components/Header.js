import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderComponent() {
    switch(this.props.auth) {
      case null:
        return ;
      case false:
        return [
          <li key="1"><a href="/auth/google">Login with Google</a></li>,
          <li key="2"><a href="/auth/facebook">Login with Facebook</a></li>
        ];
      default:
        return [
            <li key="1"><Payments /></li>,
            <li key="3" style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
            <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
      return (
        <nav>
          <div className="nav-wrapper" style={{ margin: '0% 0% 0% 1%' }}>
            { 
              this.props.auth ? 
              <div className="left">
                { "Welcome " + this.props.auth.name }
              </div> 
                : 
                <Link to={this.props.auth ? '/surveys': '/' } className="left brand-logo">
                  Feedback System
                </Link>
            }            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              { this.renderComponent() }
            </ul>
          </div>
        </nav>
      )
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);