import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../static/logo.svg";
import { auth } from "../../services/firebase/firebase";
import { connect } from "react-redux";
import CartIcon from '../ShoppingCart/CartIcon/CartIcon';
import CartDropdown from '../ShoppingCart/CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import "./Header.scss";
import GlobalState from "../../redux/state";

const Header: React.FC<any> = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
				</Link>
                <Link className='option' to='/shop'>
                    CONTACT
				</Link>
                {currentUser ? (
                    <div
                        className='option'
                        onClick={async () => {
                            await auth.signOut();
                        }}
                    >
                        SIGN OUT
					</div>
                ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
					</Link>
                    )}
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);
