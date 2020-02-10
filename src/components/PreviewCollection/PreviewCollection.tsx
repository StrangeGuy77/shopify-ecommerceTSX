import * as React from 'react'
import './PreviewCollection.scss';
import { ICollections } from '../../pages/ShopPage/ShopPage'
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection: React.FC<ICollections> = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">Title: {title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((_, idx) => idx < 4)
                        .map(({ id, ...otherProps }) => {
                            return (
                                <CollectionItem key={id} {...otherProps} />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default PreviewCollection;
