import React from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { tokens } from '../data/tokens'

const StyledTextField = styled(TextField)`
    width: 100%;

    & .MuiFormLabel-root.Mui-focused {
        color: rgb(${tokens.colors.purple});
    }

    & .MuiInputBase-root::after {
        border-bottom-color: rgb(${tokens.colors.purple});
    }


`

/**
 * 
 * @typedef {object} props
 * @property {string} label
 * @property {string} value
 * @property {'text' | 'password' | 'email'} accepts
 * @property {(value: straing) => void} onChange
 */

/**
 * 
 * @param {props} props 
 * @returns {JSX.Element}
 */

export const Input = (props) => {
    const { accepts, label, onChange, value } = props
    const handleChange = (event) => onChange(event.target.value);

    return (
    <TextField
     value={value}
     label={label}
     onChange={handleChange}
     fullWidth 
     inputProps={{ type: accepts }}
      variant="filled"
      />
    );
};

export default Input