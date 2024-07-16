import React from 'react';
import { Link } from 'react-router-dom';
import './sideNavigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPeopleGroup, faRightToBracket, faGear, faCircleQuestion, faClipboardQuestion, faFileSignature, faArrowUpFromBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


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
        url: "/community",
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
        userEmail: 'admin@glawbal.com',
        icon: <FontAwesomeIcon icon={faGear} size='2x' className='animatedIcon'/>,
        url: "/db",
    },
    {
        title: "Login",
        userEmail: '',
        icon: <FontAwesomeIcon icon={faRightToBracket} size='2x' className='animatedIcon'/>,
        url: "/login",
    },
];

const SideNavigation = ({userRefreshToken, userEmail}) => {
    return (
        <div className="sideNav">
            <div className="sideNavInner">
                <div className="sideNavTop">
                    {/* 로그인 완료된 상태여야만 상단메뉴(기능 메뉴) 뜸 */}
                    {userRefreshToken != '' ? 
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
                        </nav> : <></>
                    }
                    
                </div>
                <div className="sideNavBottom">
                    <nav className='menu'>
                        <ul>
                            {/* 관리자 화면 */}
                            {userEmail == 'admin@glawbal.com' ? 
                                <li>
                                    <Link to="/db">
                                        <FontAwesomeIcon icon={faGear} size='2x' className='animatedIcon'/>
                                        <span>Settings</span>
                                    </Link>
                                </li> : <></>
                            }

                            {/* 로그인/로그아웃 */}
                            {(userEmail == '') ? 
                                <li>
                                    <Link to="/login">
                                        <FontAwesomeIcon icon={faRightToBracket} size='2x' className='animatedIcon'/>
                                        <span>Login</span>
                                    </Link>
                                </li> :
                                <li>
                                    <Link to="/logout">
                                        <FontAwesomeIcon icon={faRightFromBracket} size='2x' className='animatedIcon'/>
                                        <span>Logout</span>
                                    </Link>
                                </li> 
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideNavigation;