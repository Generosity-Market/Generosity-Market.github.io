import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserData } from '../../actions/actions';
import Header from '../../components/Header';
import UserDetails from './components/UserDetails/';
import UserCauses from './components/UserCauses';
import Receipts from './components/Receipts';
import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editProfile: false
    }
  }

  getFirstName = (name) => {
    let index = name.indexOf(" ");
    let firstName = name.substring(0, index);
    return firstName;
  }

  render() {
    const { user } = this.props;
    if (!user) {
      const id = this.props.match.params.id;
      this.props.getUserData(id);
    };

    return(
      <div className="Dashboard">

        {user ? <Header
          heading={`${this.getFirstName(user.name)}\'s Dashboard`}
          BGimage={user.backgroundImage} mainImage={user.mainImage}
        /> : '' }

        {user ? <UserDetails
          name={user.name}
          address={user.address}
          phone={user.phone}
        /> : '' }

        <UserCauses />

        <Receipts />

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      getUserData: getUserData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
