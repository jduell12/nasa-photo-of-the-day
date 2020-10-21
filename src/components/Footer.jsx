import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
    color: #DFE0DF;
`

export default function Footer(props){
    const {copyright} = props

    return (
        <div>
            <FooterStyled>{copyright}</FooterStyled>
        </div>
    )
}