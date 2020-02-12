import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../static/logo.svg'
import { auth } from '../../services/firebase/firebase'
import './Header.scss'

const Header: React.FC<IProps> = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={async () => await auth.signOut()}> SIGN OUT </div>
                        :
                        <Link className='option' to='/signin'> SIGN IN </Link>
                }
            </div>
        </div>
    )
}

interface IProps {
    currentUser: any;
}

export default Header