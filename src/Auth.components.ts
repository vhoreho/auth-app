import styled from "styled-components";

export const AuthTitile = styled.h1`
    font-weight: bold;
    margin: 0;
    text-align: center;
    margin-bottom: 1rem;
`

export const AuthForm = styled.form`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    height: 100%;
    text-align: center;
    border-radius: 4px;
`

export const AuthFormField = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    width: 100%;
`

export const AuthFormBtn = styled.button`
    border-radius: 10px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 1.1rem;
    padding: 12px 45px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin-top: 1rem;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`