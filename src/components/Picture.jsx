import React from 'react';
import styled from 'styled-components';

const ImgStyled = styled.img`
  width: 80%;
  height: 10%;
  border-radius: 10%;
  
`

export default function Picture (props){
    const {url} = props

    return (
        <div>
          {
            url !== null ? <ImgStyled src={url} alt="nasa"/> : <p>Picture Loading</p>
          }
        </div>
    )
}