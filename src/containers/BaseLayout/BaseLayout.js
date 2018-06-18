import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import navLinks from './linksData.js';
import TopMenu from './components/TopMenu/TopMenu';
import NavLink from './components/NavLink/NavLink';
import FontAwesome from '../../components/FontAwesome/FontAwesome';
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

        <TopMenu openMenu={this.navToggle} />

        <nav style={this.state.showMenu ? {left: '0%'} : {left: '-100%'}}>
          <div className="menuLogo navLinks">
            <img src={require('../../Assets/Logo/PNG/Artboard-1Generosity-Logo.png')} alt="Generosity Market top menu logo"/>
          </div>

          { navLinks.map( (link, index) =>
              <NavLink key={index}
                icon={link.icon}
                name={link.name}
                color={link.color}
                endpoint={link.endpoint}
                handleNavigation={this.handleNavigation} />
          ) }

          <div className='closeMenu' onClick={() => this.setState({showMenu: false})}>
            <FontAwesome classname={"fas fa-times"} />
          </div>
        </nav>

        {this.props.children}

      </div>
    )
  };
};

export default withRouter(BaseLayout);
