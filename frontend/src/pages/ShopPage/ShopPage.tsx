import * as React from 'react';
import CollectionOverview from '../../components/CollectionsOverview/CollectionOverview';
import { Route, RouteComponentProps } from 'react-router-dom';
import Collection from './Collection/Collection';

const ShopPage: React.FC<IProps> = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={Collection} />
        </div>
    );
};

interface IProps extends RouteComponentProps { };

export default ShopPage;