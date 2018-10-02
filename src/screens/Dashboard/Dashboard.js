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
    const { user } = this.props;
    if (!user) {
      const id = this.props.match.params.id;
      this.props.getUserData(id);
    };
    console.log(user);

    return(
      <div className="Dashboard">

        {/*
          TODO Once we have a user bucket in Amazon S3 and a create user 
          page we need to remove the getImageURL Utility function 
        */}

        {user &&
        <Banner
          heading={`${this.getFirstName(user.name)}s Dashboard`}
          BGimage={Utils.getImageURL(user.backgroundImage)}
          mainImage={Utils.getImageURL(user.mainImage)}
          roundImage={user.Preferences.roundImage}/> }

        <div className="Wrapper">

          {user &&
          <UserDetails
            name={user.name}
            phone={user.phone}
            address={this.returnAddressInfo(user)}
            editProfile={this.state.editProfile}/> }

          {user &&
          <UserCauses
            causes={user.Causes}
            causeSelected={this.props.causeSelected}/> }

          <LinkButton
            href={'/causes/new'}
            classname={'create-cause'}
            linkText={'Create a cause'}/>

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
