import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import './index.css';

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
    console.log("props: ", this.props);
    return(
      <div className="BaseLayout">

        <div className='topnav'>
          <div className='links'>
            <Link to="/">
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
          <div className='navLinks' onClick={() => this.handleNavigation('/splash')}>Splash Page</div>
          
          <div className='navLinks' onClick={() => this.handleNavigation('/causes')}>Causes Page</div>
          
          <div className='navLinks' onClick={() => this.handleNavigation('/dashboard/1')}>Dashboard Page</div>
                  
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
