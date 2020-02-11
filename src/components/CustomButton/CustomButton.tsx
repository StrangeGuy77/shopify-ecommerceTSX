import * as React from 'react';
import './CustomButton.scss'

const Button: React.FC<IProps> = ({ children, ...otherProps }) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default Button;

interface IProps {
    value?: string;
}