import React from 'react'
import styled from 'styled-components';
import { tokens } from '../data/tokens'
import { Text } from '../Text';
import { Button } from '../Button';
import { Link } from '../Link';
import { StylesProvider } from '@material-ui/core';

const COLORS = {
    white: `rgb(${tokens.colors.white})`,
    purple: `rgb(${tokens.colors.purple})`,
    whiteStronger: `rgba(${tokens.colors.white}, ${tokens.colors.stronger})`,
    blackStrong: `rgba(${tokens.colors.black}, ${tokens.colors.strong})`,
}

const Base = styled.div`
    text-align: centre;
    padding: ${tokens.spacing.xl} ${tokens.spacing.m} ${tokens.spacing.l};
    height: 100%;
    display: flex;
    flex-direction: column;
    color: ${({ inverse }) => inverse ? COLORS.whiteStronger : COLORS.blackStrong};
    width: 100%;
    max-width: 30rem;
    height: 100vh;
    max-height: 30rem;
    
`;

const Content = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const Nested = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: centre;
    align-items: centre;
`;

const ButtonWrap = styled.div`
    padding: ${tokens.spacing.s};
`;

const LinkWrap = styled.div`
    padding: ${tokens.spacing.m} ${tokens.spacing.xs} ${tokens.spacing.xs};
`;

const NestedChildren = styled.div`
  width: 100%;
`;

const BaseWrap = styled.div`
background: ${({ inverse }) => inverse ? COLORS.purple : COLORS.white};
color: ${({ inverse }) => inverse ? COLORS.whiteStronger : COLORS.blackStrong};
min-height: 100vh;
display: flex;
align-items: centre;
justify-content: centre;
padding-bottom: ${token.spacing.xl};
`

/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {string} title
 * @property {boolean} inverse
 * @property {[string, string | function]} [primary]
 * @property {[string, string | function]} [secondary]
 * @property {[string, string | function]} [extra]
 */

/**
 * @param {props} props 
 * @returns {JSX.Element}
 */

export const Layout = (props) => {
    const { children, title, inverse, extra, primary, secondary } = props
    return (
        <BaseWrap inverse={inverse}>
    <Base>
    <Header>
        <Text size="xl" component="h1" inverse={inverse}>
            {title}
            </Text>
            </Header>

            <Content>
            <Nested>
            <NestedChildren>{children}</NestedChildren>
            </Nested>
           
            {secondary && (
            <ButtonWrap>
                <Button action={secondary[1]} inverse={inverse} full>{secondary[0]}</Button>
            </ButtonWrap>)}

            {primary && (<ButtonWrap>
                <Button action={primary[1]} inverse={inverse} full importance="primary">{primary[0]}</Button>
            </ButtonWrap>)}

            {extra && (<LinkWrap>
                <Link action={extra[1]} inverse={inverse}>{extra[1]}</Link>
            </LinkWrap>)}

            </Content>
            </Base>
            </BaseWrap>
    );
};

export default Layout