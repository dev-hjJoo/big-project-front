import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAngle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";



class Header extends Component {
    render() {
        return (
            <header>
                <div className="headerInner">
                    <Link to='/'>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faHandshakeAngle} size='2x'/>
                            <div>Glawbal</div>
                        </div>
                    </Link>
                    
                    <div className="userOptions">
                        <div className='nation'>
                            <FontAwesomeIcon icon={faGlobe} size='lg'/>
                            <div className="label">방문 국가:</div>
                            <select>
                                <option value="korea"> Korea </option>
                                <option value="austrailia"> Austrailia </option>
                                <option value="canada"> Canada </option>
                                <option value="uk"> United Kingdom </option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;