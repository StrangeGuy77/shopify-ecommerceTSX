import * as React from 'react'
import './SignIn.scss'
import FormInput from '../../../components/FormInput/FormInput'
import CustomButton from '../../../components/CustomButton/CustomButton';

export default class SignIn extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    signIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value, name } = e.currentTarget;

        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }), () => console.log(this.state))
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={(e) => this.signIn(e)}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleInput}
                    />
                    <label> Email </label>
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleInput}
                    />
                    <CustomButton> SignIn </CustomButton>
                </form>

            </div>
        )
    }
}

interface IState {
    email: string;
    password: string;
}