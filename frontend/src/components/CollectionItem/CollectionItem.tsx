import * as React from 'react';
import './CollectionItem.scss';
import { Items } from '../../pages/ShopPage/ShopPage';
import CustomButton from '../CustomButton/CustomButton';

const CollectionItem: React.FC<Items> = ({ name, price, imageUrl }) => {
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
            <CustomButton inverted> Add to cart </CustomButton>
        </div>
    );
};

export default CollectionItem;