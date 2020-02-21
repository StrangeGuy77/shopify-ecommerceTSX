import * as React from 'react';
import './CartIconStyles.scss';
import { ReactComponent as ShoppingIcon } from '../../../static/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../../redux/cart/cartActions';


const CartComponent: React.FC<any> = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartComponent);