import * as React from 'react';
import './CartIconStyles.scss';
import { ReactComponent as ShoppingIcon } from '../../../static/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../../redux/cart/cartActions';


const CartComponent: React.FC<any> = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count"> {itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }: any) => ({
    itemCount: cartItems.reduce((accumulatedQuantity: any, cartItem: any) => accumulatedQuantity + cartItem.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);