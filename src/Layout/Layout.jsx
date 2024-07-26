import React from 'react';
import Header from './Header/Header';
import SideNavigation from './SideNavigation/SideNavigation';
import "./layout.scss";



const Layout = ({children, userAccessToken, userNickname, selectedNation, setSelectedNation}) => {
    return (
        <div className="display">
            <SideNavigation userAccessToken={userAccessToken}
                            userNickname={userNickname} />

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