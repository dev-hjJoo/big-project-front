import React from 'react';
import { Link } from 'react-router-dom';
import './sideNavigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPeopleGroup, faRightToBracket, faGear, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";


const SideNavTop = [
    {
        title: "Bot",
        icon: <FontAwesomeIcon icon={faComments} size='2x' className='animatedIcon'/>,
        url: "/chat",
    },
    {
        title: "Community",
        icon: <FontAwesomeIcon icon={faPeopleGroup} size='2x' className='animatedIcon'/>,
        url: "/community",
    },
];

const SideNavBottom = [
    {
        title: "FAQ",
        icon: <FontAwesomeIcon icon={faCircleQuestion} size='2x' className='animatedIcon'/>,
        url: "/faq",
    },
    {
        title: "Settings",
        icon: <FontAwesomeIcon icon={faGear} size='2x' className='animatedIcon'/>,
        url: "/db",
    },
    {
        title: "Login",
        icon: <FontAwesomeIcon icon={faRightToBracket} size='2x' className='animatedIcon'/>,
        url: "/login",
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