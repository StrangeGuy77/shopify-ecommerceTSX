import * as React from 'react'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp';
import './UserAuth.scss';

const UserAuth: React.FC<any> = () => {
    return (
        <div className="sign-in-component">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default UserAuth;