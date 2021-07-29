import React from 'react'
import { Link } from './Link'
import styled from 'styled-components'
import tokens from '../data/tokens'

const DarkBg = styled.div`
   width: 100%;
   background: rgb(${tokens.color.purple});
`

export const Demo = () => {
    return <div>
        <Link action="#">Hello World!</Link>
        <Link action={() => console.log('Fired!')}>Hello World!</Link>

        <DarkBg>
        <Link inverse action="#">Hello World!</Link>
        <Link inverse action={() => console.log('Fired!')}>Hello World!</Link>
        </DarkBg>
      
    </div>
}

export default Demo