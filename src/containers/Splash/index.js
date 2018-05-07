import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import LinkButton from '../../components/LinkButton';
import { destroyCookie, getCauseList } from '../../actions/actions';
import './Splash.css';

class Splash extends Component {


  componentDidMount() {
    // if (!this.props.token) {
    //   this.setState({showLogin: true})
    // }
    this.props.getCauseList();
  };

  render() {
    return(
      <div className='Splash'>

        <div className='logo-container'>
          <img className='Logo' src={require('../../Assets/Logo/PNG/Artboard-1-copy-2Generosity-Logo.png')} alt="Generosity Market Logo"/>
        </div>

        <div className='links'>
          <LinkButton classname={'create-cause'} linkText={'Create a cause'} href={'/causes/new'}/>
          <LinkButton classname={'find-cause'} linkText={'Find a cause'} href={'/causes'}/>
          <LinkButton classname={'sign-in'} linkText={'Sign in'} href={'/'}/>
        </div>

        <a href='/' className='sign-up'>Not a member? Sign up here</a>

      </div>
    )
  }
};

// const mapStateToProps = (state) => {
//   return {
//     token: state.token,
//     user: state.user
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // destroyCookie: destroyCookie,
    getCauseList: getCauseList
  }, dispatch)
};

export default connect(null, mapDispatchToProps)(Splash);
