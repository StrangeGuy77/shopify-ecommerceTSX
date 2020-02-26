import * as React from 'react';
import './CartItemStyles.scss';
import { cartItem } from '../../../redux/state';

const CartItem: React.FC<IProps> = ({ Item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x {price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;

interface IProps {
    Item: cartItem;
}