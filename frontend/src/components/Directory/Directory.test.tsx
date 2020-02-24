import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Directory from './Directory';

it('Should render directory with MenuItems within', () => {
    const tree = renderer.create(<Directory />).toJSON();
    expect(tree).toMatchSnapshot();
});