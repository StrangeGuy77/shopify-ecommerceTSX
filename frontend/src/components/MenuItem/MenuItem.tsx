import * as React from 'react';
import "./MenuItemStyles.scss";
import { withRouter, RouteComponentProps } from 'react-router-dom';

class MenuItem extends React.Component<any | IProps> {

    render () {
        return (
            <div className={`menu-item ${this.props.size}`} onClick={() => this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`)}>
                <div className="background-image" style={{
                    backgroundImage: `url(${this.props.imageUrl
                        })`
                }} />
                <div className="content">
                    <h1 className="title">{this.props.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        );
    }
}

interface IProps extends RouteComponentProps {
    id?: number;
    name?: string;
    imageUrl?: string;
    price?: number;
    size?: string;
    linkUrl?: string;
}

export default withRouter(MenuItem);