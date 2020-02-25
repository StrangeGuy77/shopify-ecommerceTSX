import * as React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import './CartDropdown.scss';
import '../CartItem/CartItem';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';

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

const mapStateToProps = ({ cart: { cartItems } }: any) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);