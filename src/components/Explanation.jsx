import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    color: #FEBA67;
    text-align: justify;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 3%;
`

export default function Explanation (props){
    const {explanation} = props;
    return (
        <div>
            <StyledP>{explanation}</StyledP>
        </div>
    )
}