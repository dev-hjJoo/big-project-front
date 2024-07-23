import React from 'react';
import Header from './Header/Header';
import SideNavigation from './SideNavigation/SideNavigation';
import "./layout.scss";



const Layout = ({children, userAccessToken, userEmail, selectedNation, setSelectedNation}) => {
    return (
        <div className="display">
            <SideNavigation userAccessToken={userAccessToken}
                            userEmail={userEmail} />

            <main>
                <Header selectedNation={selectedNation}
                        setSelectedNation={setSelectedNation} />
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;