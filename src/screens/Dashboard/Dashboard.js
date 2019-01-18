import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Utils from '../../utilities/utilities';
import './dashboard.css';

import { 
  getCauseList, 
  causeSelected 
} from '../../ducks/cause';

import {
  getUserData,
  loadTokenFromCookie
} from '../../ducks/user';

// Component imports
import Banner from '../../components/Banner/Banner';
import UserDetails from './components/UserDetails/UserDetails';
import UserCauses from './components/UserCauses/UserCauses';
import DonorInfo from './components/DonorInfo/DonorInfo';
import Receipts from './components/Receipts/Receipts';
import LinkButton from '../../components/LinkButton/LinkButton';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editProfile: false,
      highlightedCause: null,
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

  selectCauseToHighlight = (causeId) => {
    const { highlightedCause } = this.state;

    switch(true) {
      case (highlightedCause === null):
      case (highlightedCause !== causeId):
        this.setState({ highlightedCause: causeId });
        break;
        // If the cause that is already highlighted is selected, set state to null??
      case (highlightedCause === causeId):
        this.setState({ highlightedCause: null });
        break;
      default:
        break;
    }
  }

  getHighlightedCause = () => {
    const { user } = this.props;
    const { highlightedCause } = this.state;

    return user.Causes.filter(cause => cause.id === highlightedCause)[0];
  }

  render() {
    const {
      user,
      userData,
      history,
      getUserData,
      causeSelected,
    } = this.props;

    const {
      highlightedCause,
      editProfile,
    } = this.state;

    if (!user && userData) getUserData(userData.id);
    if (!user && !userData) history.push('/');
    console.warn("User info: ", user);

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
            editProfile={editProfile}
          />

          <UserCauses
            causes={user.Causes}
            causeSelected={causeSelected}
            selectCauseToHighlight={this.selectCauseToHighlight}
            highlightedCause={highlightedCause}
          />

          <LinkButton
            href={'/causes/new'}
            classname={'create-cause'}
            linkText={'Create a cause'}
          />

          <DonorInfo 
            cause={{...this.getHighlightedCause()}}
          />

          <Receipts />

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    user: { user },
  } = state;

  return {
    user,
  }
};

const mapDispatchToProps = {
  getUserData,
  getCauseList,
  causeSelected,
  loadTokenFromCookie,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
