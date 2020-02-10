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
                    this.state.sections.map(({ id, ...anotherSectionProps }) => {
                        return <MenuItem key={id} {...anotherSectionProps} />
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