import React from 'react';
import Header from './Header/Header';
import SideNavigation from './SideNavigation/SideNavigation';
import "./layout.scss";



const Layout = ({children, userAccessToken, userEmail}) => {
    return (
        <div className="display">
            <SideNavigation userAccessToken={userAccessToken}
                            userEmail={userEmail} />

            <main>
                <Header/>
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;