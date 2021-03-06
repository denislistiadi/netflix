import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { OptForm } from '../components';
import  { Feature } from '../components';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home - Netflix Clone</title>
            </Helmet>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                        <OptForm>
                            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                            <OptForm.Break/>
                            <OptForm.Input placeholder="Email address" />
                            <OptForm.Button>Get Started</OptForm.Button>
                        </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}

export default Home;