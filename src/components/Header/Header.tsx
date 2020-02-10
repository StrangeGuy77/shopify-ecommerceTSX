import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../static/logo.svg'
import './Header.scss'

const Header: React.FC = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
            </div>
        </div>
    )
}

export default Header