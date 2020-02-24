import * as React from 'react';
import './CustomButton.scss';

const Button: React.FC<IProps> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    isGoogleSignIn?: boolean;
    inverted?: boolean;
}