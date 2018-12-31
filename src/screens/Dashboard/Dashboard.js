import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData, getCauseList, causeSelected } from '../../actions/actions';
import Utils from '../../utilities/utilities';
import './dashboard.css';

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

  render() {
    const {
      user,
      match: { 
        params: { 
          id 
        }
      },
      getUserData,
      causeSelected,
    } = this.props;

    if (!user) {
      getUserData(id);
    };

    return user && (
      <div className="Dashboard">

        {/*
          TODO Once we have a user bucket in Amazon S3 and a create user 
          page we need to remove the getImageURL Utility function 
        */}


        <Banner
          heading={`${this.getFirstName(user.name)}s Dashboard`}
          BGimage={Utils.getImageURL(user.backgroundImage)}
          mainImage={Utils.getImageURL(user.mainImage)}
          roundImage={user.Preferences.roundImage}
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

  getFirstName = (name) => {
    let index = name.indexOf(" ");
    let firstName = name.substring(0, index);
    return firstName || name;
  };

  returnAddressInfo = (user) => {
    return {
      street: user.street,
      city: user.city,
      state: user.state,
      zipcode: user.zicode
    };
  };

};

const mapStateToProps = (state) => {
  return { user: state.user }
};

const mapDispatchToProps = { getUserData, getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
