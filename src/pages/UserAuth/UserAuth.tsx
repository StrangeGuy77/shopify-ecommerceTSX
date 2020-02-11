import * as React from 'react'
import './UserAuth.scss';
import SignIn from './SignIn/SignIn'
// import SignUp from './SignUp/SignUp';

const UserAuth: React.FC<any> = () => {
    return (
        <div className="sign-in-component">
            <SignIn />
        </div>
    )
}

export default UserAuth;