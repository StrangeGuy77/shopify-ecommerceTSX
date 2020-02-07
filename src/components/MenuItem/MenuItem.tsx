import React, { Component } from 'react'
import "./MenuItemStyles.scss"

export default class MenuItem extends Component<IProps> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            test: ""
        }
    }

    render() {
        return (
            <div className={`${this.props.size} menu-item`} >
                <div className="background-image" style={{
                    backgroundImage: `url(${this.props.imageUrl})`
                }} />
                <div className="content">
                    <h1 className="title">{this.props.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        )
    }
}

interface IProps {
    title: string;
    imageUrl: string;
    size?: string;
}