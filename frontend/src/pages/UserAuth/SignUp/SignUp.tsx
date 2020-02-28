import * as React from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../../services/firebase/firebase';
import { red } from 'chalk';
import './SignUp.scss';

export default class SignUp extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password === confirmPassword)
        {
            try
            {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user as firebase.User, { displayName });
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            } catch (error)
            {
                console.log(red('There was an error in user signup ' + error));
            }
        }
    };

    render () {

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign with your email and password</span>
                <form className="sign-up-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput
                        type="text"
                        name="displayName"
                        handleChange={this.handleChange}
                        label="Display Name"
                        value={this.state.displayName}
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="text"
                        name="email"
                        handleChange={this.handleChange}
                        label="Email"
                        value={this.state.email}
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        label="Password"
                        value={this.state.password}
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        required
                    >
                    </FormInput>
                    <CustomButton typeof="submit"> SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

interface IState {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}