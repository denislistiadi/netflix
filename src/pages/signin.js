import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import Helmet from 'react-helmet';

function Signin() {

    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || email === '';

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmail('')
                setPassword('')
                setError(error.message);
            })
    }

    return (
        <>
        <Helmet>
            <title>Sign In - Netflix Clone</title>
        </Helmet>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            type="email"
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.ButtonLink to ="/signup">Sign Up</Form.ButtonLink>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};

export default Signin;