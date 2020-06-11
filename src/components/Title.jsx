import React from 'react'

export default function Title(props){
    const {title, date} = props

    return (
        <div>
            <h1>{title}</h1>
            <h3>{date}</h3>
        </div>
    )
}