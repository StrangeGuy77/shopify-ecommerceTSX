import * as React from 'react';
import './CollectionStyles.scss';
import { connect } from 'react-redux';
import GlobalState from '../../../redux/state';
import { selectExactCollectionCategory } from '../../../redux/shop/shopSelector';
import CollectionItem from '../../../components/CollectionItem/CollectionItem';
import { ICollections, Items } from '../../../components/CollectionsOverview/CollectionOverview';
import { RouteComponentProps } from 'react-router-dom';

const CategoryComponent: React.FC<IProps> = ({ shop }) => {

    const { items, title } = shop as ICollections;

    return (
        <div className="collection-page">
            <div className="title">
                {title}
            </div>
            <div className="items">
                {
                    items.map((item: Items) => <CollectionItem key={item.id} item={item} />)
                }
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