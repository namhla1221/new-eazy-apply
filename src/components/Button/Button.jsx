import React from 'react'
import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'
import { tokens } from '../../components/data/tokens'
import { Link } from 'react-router-dom'

const COLORS = {
    white: `rgb(${tokens.colors.white})`,
    purple: `rgb(${tokens.colors.purple})`,
    black: `rgb(${tokens.colors.black})`,
    none: `transparent`,
    purpleSubtler: `rgba(${tokens.colors.purple}, ${tokens.opacity.subtler})`,
    purpleStronger: `rgba(${tokens.colors.purple}, ${tokens.opacity.stronger})`,
    whiteSubtler: `rgba(${tokens.colors.white}, ${tokens.opacity.subtler})`,
    whiteStronger: `rgba(${tokens.colors.white}, ${tokens.opacity.stronger})`,
}

const calcBackground = ({ importance, inverse }) => {
    if (importance === 'primary' && inverse) return COLORS.white;
    if (inverse || importance === 'secondary') return COLORS.none
    return COLORS.purple
}

const calcColor = ({ importance, inverse }) => {
    if (importance === 'primary' && inverse) return COLORS.purple;
    if (inverse || importance === 'primary') return COLORS.white
    return COLORS.purple
}

const calcBorder = ({ importance, inverse }) => {
    if (importance === 'primary') return `1px solod ${COLORS.none}`;
    if (inverse ) return `1px solod ${COLORS.white}`;
    return `1px solod ${COLORS.purple}`;
}

const calcHover = ({ importance, inverse }) => {
    if (importance === 'primary' && inverse) return COLORS.whiteStronger;
    if (inverse) return COLORS.whiteStronger;
    if (importance === 'primary') return COLORS.purpleStronger
    return COLORS.purpleSubtler
}

const calcActionProps = (action) => {
    if (!action) {
        return { disabled: true }
    }

    if (typeof action !== 'string') return { component: 'button', onClick: action }
    return { component: Link, to: action }
}

const StyledButton = styled(MuiButton)`
    color: ${calcColor};
    background-color: ${calcBackground};
    border: 1px solid ${calcBorder};
    padding: ${tokens.spacing.s};
   

    &:hover {
       background: ${calcHover};
    }
`

/**
 * @typedef {object} props 
 * @property {JSX.Element} children 
 * @property {'primary' | 'secondary'} importance
 * @property {boolean} inverse
 * @property {string | function} action
 */

/**
 * @param {props} props 
 * @returns {JSX.element}
 */

export const Button = (props) => {
    const { children, inverse, importance = 'secondary', action, full = false } = props;
    const variant = importance === 'primary' ? 'contained' : 'outlined'
    const actionProps = calcActionProps(action)

    return (
    <StyledButton 
    inverse={inverse} 
    importance={importance} 
    children={children} 
    {...actionProps} 
    fullWidth={full} 
    variant={variant} />
    )
}

export default Button