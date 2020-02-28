import * as React from 'react';
import "./MenuItemStyles.scss";
import { withRouter, RouteComponentProps } from 'react-router-dom';

const MenuItem: React.FC<IProps> = ({ linkUrl, history, size, match, imageUrl, title }) => {

    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl
                    })`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};


interface IProps extends RouteComponentProps {
    title: string;
    id?: number;
    name?: string;
    imageUrl?: string;
    price?: number;
    size?: string;
    linkUrl?: string;
}

export default withRouter(MenuItem);