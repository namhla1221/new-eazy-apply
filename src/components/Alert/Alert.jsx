import React from 'react'
import { Alert as MuiAlert } from '@material-ui/lab'
import { CircularProgress } from '@material-ui/core'
import { Text } from '../Text'
import { tokens } from '../data/tokens'

const SEVERITY_MAP = {
    error: 'error',
    validation: 'warning',
    resolving: 'info'
}

const StyledAlert = styled(MuiAlert)`
    align-items: centre;
`

const DescriptionWrap = styled.div`
    padding-top: ${tokens.spacing.s}
`

/**
 * 
 * @typedef {object} props
 * @property {'error' | 'validation' | 'resolving'} nature
 * @property {string} title 
 * @property {string} [description] 
 */

/**
 * 
 * @param {props} props 
 * @returns {JSX.Element}
 */

export const Alert = (props) => {
    const { nature = 'validation', title, description } = props;
    const severity = SEVERITY_MAP[nature]
    const icon = nature === 'resolving' ? <CircularProgress size={20} thickness={6} /> : 
    undefined;

    if (!description) {
        return (
           <MuiAlert severity={severity} icon={icon}>{title}</MuiAlert>
        )
    }

    return (
        <StyledAlert severity={severity} icon={icon}>
            <Text size="m">{title}</Text>
            {description && <DescriptionWrap><Text size="s">{description}</Text></DescriptionWrap>}
            </StyledAlert>
    )
}

export default Alert