import * as React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import './CartDropdown.scss';

const CartDropdown: React.FC<any> = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton> GO TO CHECKOUT </CustomButton>
            </div>
        </div>
    );
};

export default CartDropdown;