import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import navLinks from './linksData.js';
import TopMenu from './components/TopMenu/TopMenu';
import SlideMenu from './components/SlideMenu/SlideMenu';
import './baselayout.css';

class BaseLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    };
  };

  navToggle = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  handleNavigation = (endpoint) => {
    this.props.history.replace(endpoint);
    setTimeout(() => this.navToggle(endpoint), 200);
  };

  render() {

    return(
      <div className="BaseLayout">

        <TopMenu
          openMenu={this.navToggle} />

        <SlideMenu
          navLinks={navLinks}
          closeMenu={this.navToggle}
          showMenu={this.state.showMenu}
          handleNavigation={this.handleNavigation} />

        {this.props.children}

      </div>
    )
  };
};

export default withRouter(BaseLayout);
