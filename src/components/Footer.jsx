import React from 'react'

export default function Footer(props){
    const {copyright} = props

    return (
        <div>
            <footer>{copyright}</footer>
        </div>
    )
}