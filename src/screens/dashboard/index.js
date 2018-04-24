import React, { Component } from 'react';
import './dashboard.css';
import UserDetails from './components/UserDetails/';
import UserCauses from './components/UserCauses';
import Receipts from './components/Receipts';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editProfile: false
    }
  }

  render() {
    return(
      <div className="Dashboard">
        <div className="hero-image">
          {/* this will become generated once we have user data */}
          <h2>Joe's Dashboard</h2>
        </div>

        <div className="profile-image">
          <i className="fas fa-user"></i>
        </div>

        <UserDetails />

        <UserCauses />

        <Receipts />

      </div>
    );
  }
};

export default Dashboard;
