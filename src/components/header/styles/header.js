import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => 
        src ? `../images/misc/${src}.jpg` : 
        '../images/misc/home-bg.jpg'}) top left / cover no-repeat;
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 20px;
    }
`;

export const Logo = styled.img`
    height: 40px;
    width: 160px;
    margin-right: 70px;

    @media (max-width: 600px) {
        height: 30px;
        width: 160px;

    }
`;

export const ButtonLink = styled(Link)`
    display: block;
    background-color: #e50914;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3px;
    padding: 8px 15px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }

    @media (max-width: 600px) {
        font-size: 15px;
        padding: 
    }
`;