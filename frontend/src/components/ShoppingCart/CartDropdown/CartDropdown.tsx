import * as React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import './CartDropdown.scss';
import '../CartItem/CartItem';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../../redux/cart/cartSelectors';
import GlobalState, { cartItem } from '../../../redux/state';

const CartDropdown: React.FC<IProps> = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((item: cartItem) => <CartItem key={item.id} Item={item} />)
                }
                <CustomButton> GO TO CHECKOUT </CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);

interface IProps {
    cartItems: cartItem[];
}