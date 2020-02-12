import * as React from 'react';
import './FormInput.scss'

const FormInput: React.FC<IProps> = ({ handleChange, label, value, ...otherProps }) => {
    return (
        <div className="group">
            <input
                type="text"
                className="form-input"
                onChange={handleChange}
                {...otherProps}
                required />
            {
                label ?
                    <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                    : null
            }
        </div>
    )
}

export default FormInput

interface IProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    label?: string;
    value?: any;
    type?: string;
    name?: string;
    required?: boolean

}