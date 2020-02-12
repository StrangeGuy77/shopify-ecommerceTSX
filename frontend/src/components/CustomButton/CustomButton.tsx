import * as React from 'react';
import './CustomButton.scss'

const Button: React.FC<IProps> = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;

interface IProps {
    value?: string;
    onClick?: () => any;
    isGoogleSignIn?: boolean;
}