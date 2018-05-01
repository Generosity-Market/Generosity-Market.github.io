import React, { Component } from 'react';
import './dashboard.css';
import Header from '../../components/Header';
import UserDetails from './components/UserDetails/';
import UserCauses from './components/UserCauses';
import Receipts from './components/Receipts';

import user from '../../data/user.js';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editProfile: false
    }
  }

  getFirstName = (name) => {
    console.log();
    return name;
  }

  render() {
    console.log(user);
    return(
      <div className="Dashboard">

        {/* TODO change logic for the pics once we have data */}

        <Header
          heading={`${this.getFirstName(user.name)}\'s Dashboard`}
          BGimage={user.backgroundImage} mainImage={user.mainImage}
        />

        <UserDetails
          name={user.name}
          address={user.address}
          phone={user.phone}
        />

        <UserCauses />

        <Receipts />

      </div>
    );
  }
};

export default Dashboard;
