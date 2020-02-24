import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CollectionItem from './CollectionItem';

it('Should render Collection Item correctly', () => {
    const propsTemplate = ({ id, imageUrl, name, price }: Props) => ({
        id, name, imageUrl, price
    });

    const propsToRender = propsTemplate({ id: 1, imageUrl: "", name: "", price: 121 });

    const tree = renderer.create(<CollectionItem {...propsToRender} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

interface Props {
    id: any;
    name: string;
    imageUrl: string;
    price: number;
}