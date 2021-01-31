import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signup() {


    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = name === '' || password === '' || email === '';

    const handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => 
                result.user.updateProfile({
                    displayName: name,
                    photoURL: Math.floor(Math.random()*5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch((error) => {
                setName('')
                setEmail('')
                setPassword('')
                setError('');
            })
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title> Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="Your Name"
                            value={name}
                            onChange={({target}) => setName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            type="email"
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="Submit">Sign Up</Form.Submit>
                        <Form.Text>
                            Already a User? <Form.ButtonLink to="/signin">Sign In</Form.ButtonLink>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}