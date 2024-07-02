import React from 'react';
import { Link } from 'react-router-dom';
import './sideNavigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPeopleGroup, faRightToBracket, faGear } from "@fortawesome/free-solid-svg-icons";


const SideNavTop = [
    {
        title: "Bot",
        icon: <FontAwesomeIcon icon={faComments} size='2x'/>,
        url: "/chat",
    },
    {
        title: "Community",
        icon: <FontAwesomeIcon icon={faPeopleGroup} size='2x'/>,
        url: "/community",
    },
];

const SideNavBottom = [
    {
        title: "Login",
        icon: <FontAwesomeIcon icon={faRightToBracket} size='2x'/>,
        url: "/login",
    },
    {
        title: "Settings",
        icon: <FontAwesomeIcon icon={faGear} size='2x'/>,
        url: "/#관리자 화면",
    },
];

const SideNavigation = () => {
    return (
        <div className="sideNav">
            <div className="sideNavInner">
                <div className="sideNavTop">
                    <nav className='menu'>
                        <ul>
                            {SideNavTop.map((nav, key) => (
                                <li key={key}>
                                    <Link to={nav.url}>
                                        {nav.icon}
                                        <span>{nav.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="sideNavBottom">
                    <nav className='menu'>
                        <ul>
                            {SideNavBottom.map((nav, key) => (
                                <li key={key}>
                                    <Link to={nav.url}>
                                        {nav.icon}
                                        <span>{nav.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideNavigation;