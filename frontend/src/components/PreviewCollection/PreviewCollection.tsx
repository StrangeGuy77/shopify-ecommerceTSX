import * as React from 'react';
import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem';
import { ICollections } from '../CollectionsOverview/CollectionOverview';

const PreviewCollection: React.FC<ICollections> = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((_, idx) => idx < 4)
                        .map((item) => {
                            return (
                                <CollectionItem key={item.id} item={item} />
                            );
                        })
                }
            </div>
        </div>
    );
};

export default PreviewCollection;
