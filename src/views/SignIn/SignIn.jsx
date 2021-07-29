import React from 'react';
import styled from 'styled-components'
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { tokens } from "../../components/data/tokens";
import { useSignIn } from "./SignIn.useSignIn";
import { ALERTS } from "./SignIn.constant";

const InputWrapper = styled.div`
    padding: ${tokens.spacing.s} 0;
`;

export const SignIn = () => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        SignIn,
        alert,
    } = useSignIn();

    
}

export default SignIn;