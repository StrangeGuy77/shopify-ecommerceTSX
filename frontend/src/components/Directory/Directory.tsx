import "./DirectoryStyles.scss";
import * as React from "react";
import ShopData from "../../utils/DirectoryComponentData";
import MenuItem from "../MenuItem/MenuItem";

export default class Directory extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ShopData
        };
    }

    render () {
        return (
            <div className='directory-menu'>
                {this.state.ShopData.map(({ id, ...anotherSectionProps }) => {
                    return <MenuItem key={id} {...anotherSectionProps} />;
                })}
            </div>
        );
    }
}

interface IState {
    ShopData: ShopInfo[];
}

interface ShopInfo {
    id: number;
    title: string;
    routeName: string;
    items: Items[];
}

interface Items {
    id: number;
    name: string;
    imageUrl: string;
    linkUrl?: string;
    price: number;
    size?: string;
}
