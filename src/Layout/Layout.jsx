import React from 'react';
import Header from './Header/Header';
import SideNavigation from './SideNavigation/SideNavigation';
import "./layout.scss";



const Layout = (props: children) => {
    return (
        <div>
            <SideNavigation />

            <main>
                <Header/>
                <div className="container">
                    {props.children}
                </div>
            </main>
        </div>
    );
};

export default Layout;