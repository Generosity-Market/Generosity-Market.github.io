import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData, getCauseList, causeSelected } from '../../actions/actions';
import Banner from '../../components/Banner/Banner';
import UserDetails from './components/UserDetails/';
import UserCauses from './components/UserCauses';
import Receipts from './components/Receipts';
import LinkButton from '../../components/LinkButton/LinkButton';
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
      this.props.getCauseList();
    };

    return(
      <div className="Dashboard">

        {user ? <Banner
          heading={`${this.getFirstName(user.name)}s Dashboard`}
          BGimage={user.backgroundImage}
          mainImage={user.mainImage}
          roundImage={user.preferences.roundImage}/>
        : '' }

        <div className="Wrapper">

          {user ? <UserDetails
            name={user.name}
            phone={user.phone}
            address={user.address}
            editProfile={this.state.editProfile}/>
          : '' }

          <UserCauses
            causes={this.props.causes}
            causeSelected={this.props.causeSelected}/>

          <LinkButton
            href={'/causes/new'}
            classname={'create-cause'}
            linkText={'Create a cause'}/>

          <Receipts />

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user, causes: state.causeList }
};

const mapDispatchToProps = { getUserData, getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
