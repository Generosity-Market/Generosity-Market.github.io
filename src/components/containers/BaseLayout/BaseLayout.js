import React, { Suspense, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCauseList } from 'ducks/cause';
import { loadTokenFromCookie, userLogout } from 'ducks/user';
import './baselayout.css';

// Link data imports
import navLinks from 'constants/linksData';
import bottomNavLinks from 'constants/BottomNavLinks';

// Component imports
import TopMenu from './components/TopMenu/TopMenu';
import BottomMenu from './components/BottomMenu/BottomMenu';

// NOTE: Helps with the menu loading on top of the page, before css is loaded and then moves away
const SlideMenu = React.lazy(() => import('./components/SlideMenu/SlideMenu'));

export const BaseLayout = ({
    causeList,
    children,
    getCauseList,
    loadTokenFromCookie,
    user,
    userLogout,
    token,
}) => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (!token || !user) {
            loadTokenFromCookie();
        }
        if (!causeList || !causeList.length) {
            getCauseList();
        }
        // eslint-disable-next-line
    }, []);

    const navToggle = (endpoint) => {
        setTimeout(() => setShowMenu(state => !state), 200);
        if (endpoint) handleNavigation(endpoint);
    };

    const handleNavigation = (endpoint) => {
        navigate(endpoint);
    };

    return (
        <div className="BaseLayout" data-testid="BaseLayout">
            <TopMenu openMenu={navToggle} />

            <Suspense fallback={null}>
                <SlideMenu
                    navLinks={navLinks}
                    closeMenu={navToggle}
                    showMenu={showMenu}
                    handleNavigation={navToggle}
                    logout={userLogout}
                />
            </Suspense>

            {children}

            <BottomMenu
                navLinks={bottomNavLinks}
                handleNavigation={handleNavigation}
                user={user}
            />
        </div>
    );
};

BaseLayout.displayName = 'BaseLayout';

const mapStateToProps = ({ cause, user, token }) => {
    const { causeList } = cause;

    return {
        causeList,
        user,
        token,
    };
};

const mapDispatchToProps = {
    getCauseList,
    loadTokenFromCookie,
    userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
