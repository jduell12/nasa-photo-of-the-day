import React from 'react'

export default function Picture (props){
    const {url} = props

    return (
        <div>
             {
            url !== null ? <img src={url} alt="nasa"/> : <p>Picture Loading</p>
          }
        </div>
    )
}