import "./DirectoryStyles.scss"
import React, { Component } from 'react'
import { sections } from '../../utils/DirectoryComponentData';
import MenuItem from '../MenuItem/MenuItem';

export default class Directory extends Component<any, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, id, imageUrl, size }) => {
                        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    })
                }
            </div>
        )
    }
}

interface IState {
    sections: ISections[],
}

interface ISections {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
}