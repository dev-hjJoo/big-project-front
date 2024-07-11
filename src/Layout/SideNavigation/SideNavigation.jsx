import React from 'react';
import { Link } from 'react-router-dom';
import './sideNavigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPeopleGroup, faRightToBracket, faGear, faCircleQuestion, faClipboardQuestion, faFileSignature } from "@fortawesome/free-solid-svg-icons";


const SideNavTop = [
    {
        title: "Bot",
        icon: <FontAwesomeIcon icon={faComments} size='2x' className='animatedIcon'/>,
        url: "/chat",
    },
    {
        title: "FAQ",
        icon: <FontAwesomeIcon icon={faClipboardQuestion} size='2x' className='animatedIcon'/>,
        url: "/faq",
    },
    {
        title: "Community",
        icon: <FontAwesomeIcon icon={faPeopleGroup} size='2x' className='animatedIcon'/>,
        url: "/community/list",
    },
    {
        title: "Contract\nAI-Check",
        icon: <FontAwesomeIcon icon={faFileSignature} size='2x' className='animatedIcon'/>,
        url: "/ocr",
    },
];

const SideNavBottom = [
    
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