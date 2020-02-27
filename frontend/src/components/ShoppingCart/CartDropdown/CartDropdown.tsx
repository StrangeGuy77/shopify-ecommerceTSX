import * as React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import './CartDropdown.scss';
import '../CartItem/CartItem';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../../redux/cart/cartSelectors';
import GlobalState, { cartItem } from '../../../redux/state';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import { toggleCartHidden } from '../../../redux/cart/cartActions';
import { Dispatch } from 'redux';

const CartDropdown: React.FC<IProps> = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems ? (
                        cartItems.map((item: cartItem) => <CartItem key={item.id} Item={item} />)
                    ) : (
                            <span className="empty-message"> Your cart is empty </span>
                        )
                }
                <CustomButton onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}> GO TO CHECKOUT </CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

interface IProps extends RouteChildrenProps {
    cartItems: cartItem[];
    dispatch: Dispatch;
}