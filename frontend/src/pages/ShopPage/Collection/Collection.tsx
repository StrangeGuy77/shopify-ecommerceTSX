import * as React from 'react';
import './CollectionStyles.scss';
import { connect } from 'react-redux';
import GlobalState from '../../../redux/state';
import { selectExactCollectionCategory } from '../../../redux/shop/shopSelector';
// import CollectionItem from '../../../components/CollectionItem/CollectionItem';
import { ICollections } from '../../../components/CollectionsOverview/CollectionOverview';
import { RouteComponentProps } from 'react-router-dom';

const CategoryComponent: React.FC<IProps> = ({ match, shop }) => {
    console.log(shop, match);
    return (
        <div className="collection-page">
            <div className="title">

            </div>
            <div className="items">
                <div className="collection-item">

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: GlobalState, OwnProps: IProps) => ({
    shop: selectExactCollectionCategory(OwnProps.match.params.categoryId)(state)
});

interface IProps extends RouteComponentProps<MatchParams> {
    shop: ICollections | null | undefined;
}

interface MatchParams {
    categoryId: string;
}

export default connect(mapStateToProps)(CategoryComponent);