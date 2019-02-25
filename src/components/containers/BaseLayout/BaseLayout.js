import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getCauseList } from 'ducks/cause';
import { loadTokenFromCookie, userLogout } from 'ducks/user';
import './baselayout.css';

// Link data imports
import navLinks from 'constants/linksData';
import bottomNavLinks from 'constants/BottomNavLinks';

// Component imports
import TopMenu from './components/TopMenu/TopMenu';
import SlideMenu from './components/SlideMenu/SlideMenu';
import BottomMenu from './components/BottomMenu/BottomMenu';

export class BaseLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };
    }

    componentDidMount() {
        this.props.loadTokenFromCookie();
        if (!this.props.causeList || !this.props.causeList.length) {
            this.props.getCauseList();
        }
    }

    navToggle = (endpoint) => {
        setTimeout(() => this.setState({ showMenu: !this.state.showMenu }), 200);
        if (endpoint) this.handleNavigation(endpoint);
    };

    handleNavigation = (endpoint) => {
        this.props.history.replace(endpoint);
    };

    render() {

        return (
            <div className="BaseLayout">

                <TopMenu
                    openMenu={this.navToggle}
                />

                <SlideMenu
                    navLinks={navLinks}
                    closeMenu={this.navToggle}
                    showMenu={this.state.showMenu}
                    handleNavigation={this.navToggle}
                    logout={this.props.userLogout}
                />

                {this.props.children}

                <BottomMenu
                    navLinks={bottomNavLinks}
                    handleNavigation={this.handleNavigation}
                    user={this.props.user}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        cause: {
            causeList,
        },
        user: {
            user,
        },
    } = state;

    return {
        causeList,
        user,
    };
};

const mapDispatchToProps = {
    getCauseList,
    loadTokenFromCookie,
    userLogout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BaseLayout));
