import React, { Component } from 'react';
import './dashboard.css';
import Header from '../../components/Header';
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

        {/* TODO change logic for the pics once we have data */}
        <Header heading={"Joe\'s Dashboard"} BGimage={'jessica-lewis-512219.jpg'} mainImage={'profile2.jpg'}/>

        <UserDetails />

        <UserCauses />

        <Receipts />

      </div>
    );
  }
};

export default Dashboard;
