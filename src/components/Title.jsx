import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.h1`
    color: #FEBA67;
    font-family: 'Lobster', cursive;
    font-size: 300%;
    margin: 0;
    padding: 0;
    text-shadow: -1px 1px 2px #DFE0DF,
                                1px 1px 2px #DFE0DF,
                                1px -1px 0 #DFE0DF,
                                -1px -1px 0 #DFE0DF;
`

const H3styled = styled.h3`
    color: #FEBA67;
    margin: 0;
`

export default function Title(props){
    const {title, date} = props

    return (
        <div>
            <TitleStyled>{title}</TitleStyled>
            <H3styled>{date}</H3styled>
        </div>
    )
}