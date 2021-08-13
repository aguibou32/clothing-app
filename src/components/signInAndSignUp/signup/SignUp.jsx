import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

import CustomButton from '../../custom-button/CustomButton';
import FormInput from '../../form-input/FormInput';

import './SignUp.scss';

export default class SignUp extends Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('passwords do not match!');
            return; // We basically stopping the application
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password); // call the firebase function to create a user with the email and password we provided to it and save it to the user

            // console.log(user); // The display field in the user object is null at this stage

            // if the user is created, then we want to save it into our firestore, to do that we use our function in the firestore.utils.js file (Remember we have the option to add additional data with the second parametter of the createUserProfileDocument function)

            await createUserProfileDocument(user, { displayName:displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        
        // console.log(event.target); // prints out the whole input field                         

        const { name, value } = event.target; // we are desctructuring the name and value from the target (the target been the each and every FormInput). Doing it this way is advantegeous because it avoids repeating this.setState on each and every FormInput of the form. 
        
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Name"
                        onChange={this.handleChange}
                        value={displayName}
                        required />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required />

                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        onChange={this.handleChange}
                        value={password}
                        required />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="confirm password"
                        onChange={this.handleChange}
                        value={confirmPassword}
                        required />

                    <CustomButton type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}
