import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Utils from '../../utilities/utilities';
import './dashboard.css';

import { 
  getCauseList, 
  causeSelected 
} from '../../actions/actions';

import { getUserData, loadTokenFromCookie } from '../../actions/user';

// Component imports
import Banner from '../../components/Banner/Banner';
import UserDetails from './components/UserDetails/UserDetails';
import UserCauses from './components/UserCauses/UserCauses';
import Receipts from './components/Receipts/Receipts';
import LinkButton from '../../components/LinkButton/LinkButton';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editProfile: false
    }
  };

  getFirstName = (name) => {
    let index = name.indexOf(" ");
    let firstName = name.substring(0, index);
    return firstName || name;
  };

  returnAddressInfo = ({ street, city, state, zipcode }) => {
    return {
      street,
      city,
      state,
      zipcode
    };
  };

  render() {
    const {
      user,
      userData,
      history,
      getUserData,
      causeSelected,
    } = this.props;

    if (!user && userData) getUserData(userData.id);
    if (!user && !userData) history.push('/');

    return user && (
      <div className="Dashboard">

        {/*
          TODO Once we have a user bucket in Amazon S3 and a create user 
          page we need to remove the getImageURL Utility function 
        */}


        <Banner
          BGimage={user.backgroundImage && Utils.getImageURL(user.backgroundImage)}
          mainImage={user.mainImage && Utils.getImageURL(user.mainImage)}
          roundImage={user.Preferences[0] ? user.Preferences[0].roundImage : false }
        />

        <div className="Wrapper">

          <UserDetails
            name={user.name}
            phone={user.phone}
            address={this.returnAddressInfo(user)}
            editProfile={this.state.editProfile}
          />

          <UserCauses
            causes={user.Causes}
            causeSelected={causeSelected}
          />

          <LinkButton
            href={'/causes/new'}
            classname={'create-cause'}
            linkText={'Create a cause'}
          />

          <Receipts />

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user }
};

const mapDispatchToProps = {
  getUserData,
  getCauseList,
  causeSelected,
  loadTokenFromCookie,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
