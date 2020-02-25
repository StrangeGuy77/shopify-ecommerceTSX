import * as React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import './CartDropdown.scss';
import '../CartItem/CartItem';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../../redux/cart/cartSelectors';

const CartDropdown: React.FC<any> = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((item: any) => <CartItem key={item.id} item={item} />)
                }
                <CustomButton> GO TO CHECKOUT </CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);