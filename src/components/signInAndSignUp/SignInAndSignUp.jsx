import React from 'react'
import SignIn from './signIn/SignIn';
import SignUp from './signup/SignUp';

import './SignInAndSignUp.scss';



function SignInAndSignUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />

        </div>
    )
}

export default SignInAndSignUp
