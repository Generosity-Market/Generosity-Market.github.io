import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getCauseList } from '../../actions/actions';
import './baselayout.css';

// Link data imports
import navLinks from '../../constants/linksData';
// import bottomNavLinks from '../../constants/BottomNavLinks';

// Component imports
import TopMenu from './components/TopMenu/TopMenu';
import SlideMenu from './components/SlideMenu/SlideMenu';
// import BottomMenu from './components/BottomMenu/BottomMenu';

class BaseLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    };
  };

  componentDidMount() {
    if (!this.props.causeList.length) {
      this.props.getCauseList();
    };
  }

  navToggle = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  handleNavigation = (endpoint) => {
    this.props.history.replace(endpoint);
    setTimeout(() => this.navToggle(), 200);
  };

  render() {

    return(
      <div className="BaseLayout">

        <TopMenu
          openMenu={this.navToggle} 
        />

        <SlideMenu
          navLinks={navLinks}
          closeMenu={this.navToggle}
          showMenu={this.state.showMenu}
          handleNavigation={this.handleNavigation} 
        />

        {this.props.children}

        {/*<BottomMenu
          navLinks={bottomNavLinks}
          handleNavigation={this.handleNavigation}
        />*/}

      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return { causeList: state.causeList };
};

const mapDispatchToProps = { getCauseList };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BaseLayout));
