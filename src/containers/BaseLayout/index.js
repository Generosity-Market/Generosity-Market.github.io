import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import navLinks from './linksData.js';
import './baselayout.css';

class BaseLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  navToggle = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  handleNavigation = (endpoint) => {
    this.props.history.replace(endpoint);
    setTimeout(() => this.navToggle(endpoint), 200);
  }

  render() {

    return(
      <div className="BaseLayout">

        <div className='topnav' id='topnav'>
          <div className='links'>
            <Link to="/causes">
              <i className="fas fa-home"></i>
            </Link>
          </div>
          <div className="menuLogo links">
            <img src={require('../../Assets/Logo/PNG/Artboard-1-copy-4Generosity-Logo.png')} alt="Generosity Market top menu logo"/>
          </div>
          <div className='links'>
            <div onClick={() => this.setState({showMenu: true})}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>

        <nav style={this.state.showMenu ? {left: '0%'} : {left: '-100%'}}>
          <div className="menuLogo navLinks">
            <img src={require('../../Assets/Logo/PNG/Artboard-1Generosity-Logo.png')} alt="Generosity Market top menu logo"/>
          </div>

          {navLinks.map((link, index) => {
            return(
              <div key={index} className='navLinks' onClick={() => this.handleNavigation(link.endpoint)}>
                <i className={link.icon} style={{color: link.color}}></i>
                {link.name}
              </div>
            );
          })}



          <div className='closeMenu' onClick={() => this.setState({showMenu: false})}>
            <i className="fas fa-times"></i>
          </div>
        </nav>

        {this.props.children}

      </div>
    )
  }
};

export default withRouter(BaseLayout);
