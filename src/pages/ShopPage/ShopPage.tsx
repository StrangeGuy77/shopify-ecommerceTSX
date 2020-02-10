import * as React from 'react'
import { SHOP_DATA } from '../../utils/DirectoryComponentData'
import CollectionPreview from '../../components/PreviewCollection/PreviewCollection'

export default class ShopPage extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherProps }) => {
                        return <CollectionPreview key={id} {...otherProps} />
                    })
                }
            </div>
        )
    }
}

interface IState {
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