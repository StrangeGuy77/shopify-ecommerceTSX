import * as React from 'react';
import './CollectionItem.scss';
import { Items } from '../../pages/ShopPage/ShopPage';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import CustomButton from '../CustomButton/CustomButton';
import { Dispatch } from 'redux';

const CollectionItem: React.FC<IProps> = ({ item, addItem }) => {

    const { imageUrl, name, price } = item;

    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-footer">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    {price}$
                </span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}> Add to cart </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: Items) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

interface IProps {
    item: Items;
    addItem: (item: Items) => ({}) | void;
}