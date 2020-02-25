import * as React from 'react';
import './CartIconStyles.scss';
import { ReactComponent as ShoppingIcon } from '../../../static/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../../redux/cart/cartSelectors';
import { Dispatch } from 'redux';


const CartComponent: React.FC<IProps> = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count"> {itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state: any) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);

interface IProps {
    toggleCartHidden?: () => ({ type: string; });
    itemCount?: string | number;
}