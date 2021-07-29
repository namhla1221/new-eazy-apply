import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import { tokens } from '../data/tokens'

const DarkBg = styled.div`
  width: 100%;
  background: rgb(${tokens.colors.purple})
`

export const Demo = () => {
    return <div>
            <Text size="s">This is a title</Text>
            <Text size="m">This is a title</Text>
            <Text size="l">This is a title</Text>
            <Text size="xl">This is a title</Text>

            <Text size="s">This is a title bvjkvbrvWR REB JAKNRVE 
            njksgvkjstr nwjkgtgw bwkgbtwageKJQ 
            fwvawvb bagb brbae bwebjgbett
            bvtrawbngwt4gaaw
            mk.cv wtw4rgkwtgwt4gngdngtjkgtgt
            nvrfgfrsgfgtw4gfdg 
            mnwtgtgfgfvgrtggt 
            njfgnwqawgfbcvbbtb
            jkgtjgtg fg rfbtwtbfvbgf jbqetjnqkeEJQV</Text>

            <Text size="m">This is a title bvjkvbrvWR REB JAKNRVE 
            njksgvkjstr nwjkgtgw bwkgbtwageKJQ 
            fwvawvb bagb brbae bwebjgbett
            bvtrawbngwt4gaaw
            mk.cv wtw4rgkwtgwt4gngdngtjkgtgt
            nvrfgfrsgfgtw4gfdg 
            mnwtgtgfgfvgrtggt 
            njfgnwqawgfbcvbbtb
            jkgtjgtg fg rfbtwtbfvbgf jbqetjnqkeEJQV</Text>

            <Text size="l">This is a title bvjkvbrvWR REB JAKNRVE 
            njksgvkjstr nwjkgtgw bwkgbtwageKJQ 
            fwvawvb bagb brbae bwebjgbett
            bvtrawbngwt4gaaw
            mk.cv wtw4rgkwtgwt4gngdngtjkgtgt
            nvrfgfrsgfgtw4gfdg 
            mnwtgtgfgfvgrtggt 
            njfgnwqawgfbcvbbtb
            jkgtjgtg fg rfbtwtbfvbgf jbqetjnqkeEJQV</Text>

            <DarkBg>
            <Text inverse size="s">This is a title</Text>
            <Text inverse size="m">This is a title</Text>
            <Text inverse size="l">This is a title</Text>
            <Text inverse size="xl">This is a title</Text>

            <Text inverse size="s">This is a title bvjkvbrvWR REB JAKNRVE 
            njksgvkjstr nwjkgtgw bwkgbtwageKJQ 
            fwvawvb bagb brbae bwebjgbett
            bvtrawbngwt4gaaw
            mk.cv wtw4rgkwtgwt4gngdngtjkgtgt
            nvrfgfrsgfgtw4gfdg 
            mnwtgtgfgfvgrtggt 
            njfgnwqawgfbcvbbtb
            jkgtjgtg fg rfbtwtbfvbgf jbqetjnqkeEJQV</Text>

            <Text inverse size="m">This is a title bvjkvbrvWR REB JAKNRVE 
            njksgvkjstr nwjkgtgw bwkgbtwageKJQ 
            fwvawvb bagb brbae bwebjgbett
            bvtrawbngwt4gaaw
            mk.cv wtw4rgkwtgwt4gngdngtjkgtgt
            nvrfgfrsgfgtw4gfdg 
            mnwtgtgfgfvgrtggt 
            njfgnwqawgfbcvbbtb
            jkgtjgtg fg rfbtwtbfvbgf jbqetjnqkeEJQV</Text>

            <Text inversesize="l">This is a title bvjkvbrvWR REB JAKNRVE 
            njksgvkjstr nwjkgtgw bwkgbtwageKJQ 
            fwvawvb bagb brbae bwebjgbett
            bvtrawbngwt4gaaw
            mk.cv wtw4rgkwtgwt4gngdngtjkgtgt
            nvrfgfrsgfgtw4gfdg 
            mnwtgtgfgfvgrtggt 
            njfgnwqawgfbcvbbtb
            jkgtjgtg fg rfbtwtbfvbgf jbqetjnqkeEJQV</Text>

            </DarkBg>
    </div>
}

export default Demo