import React from 'react';
import styled from 'styled-components'
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { tokens } from "../../components/data/tokens";
import { useNewAccount } from "./NewAccount.useNewAccount";
import { ALERTS } from './NewAccount.constants';
import { Alert } from "../../components/Alert"

const InputWrapper = styled.div`
  padding: ${tokens.spacing.s} 0;
`

export const NewAccount = () => {
  const { 
    email, 
    password, 
    confirmPassword, 
    setEmail, 
    setPassword,
    setConfirmPassword,
    createAccount,
    alert,
   } = useNewAccount();

   const isResting = alert !== 'creating';

   if (alert === 'creating') {
     return (
     <Layout
     title="New Account"
     secondary={["Cancel", isResting && "/"]}
     primary={["Create Account", isResting && createAccount]}
     >
    <Alert title="Checking details" nature="resolving" />
    </Layout>
    )
   }

    return (
        <Layout 
        title="New Account" 
        alert= {alert ? ALERTS[alert] : undefined}
        secondary={['Cancel', '/']}
        primary={['Create Account', () => createAccount]}>

            <InputWrapper>
            <Input value={email} label="Email" accepts="email" onChange={setEmail} />
            </InputWrapper>

            <InputWrapper>
            <Input value={setPassword} label="Password" accepts="password" onChange={setPassword}/>
            </InputWrapper>

            <InputWrapper>
            <Input label="Confirm Password" accepts="password" value={confirmPassword} onChange={setConfirmPassword}/>
            </InputWrapper>

            

        </Layout>
        );
}

export default NewAccount;

