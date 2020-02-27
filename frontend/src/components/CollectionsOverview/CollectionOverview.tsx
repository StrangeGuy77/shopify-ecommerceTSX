import * as React from 'react';
import './CollectionOverview.scss';
import { connect } from 'react-redux';
import CollectionPreview from '../PreviewCollection/PreviewCollection';
import { selectShopDataCollections } from '../../redux/shop/shopSelector';
import GlobalState from '../../redux/state';

const CollectionOverview: React.FC<IShopProps> = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherProps }) => {
                    return <CollectionPreview key={id} {...otherProps} />;
                })
            }
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    collections: selectShopDataCollections(state)
});

export default connect(mapStateToProps)(CollectionOverview);

export interface IShopProps {
    collections: ICollections[];
}

export interface ICollections {
    id?: number;
    title: string;
    routeName: string;
    items: Items[];
}

export interface Items {
    id?: number;
    name: string;
    imageUrl: string;
    price: number;
}