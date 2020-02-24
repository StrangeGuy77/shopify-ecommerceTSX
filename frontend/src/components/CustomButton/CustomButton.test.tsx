import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from './CustomButton';

it('Button should render correctly', () => {
    const props = { isGoogleSignIn: false, inverted: true };

    const tree = renderer.create(<Button {...props} />);
    expect(tree).toMatchSnapshot();
});