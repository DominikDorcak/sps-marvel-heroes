import React from 'react'

interface FooterProps {
    text: string
}

interface FooterState {

}

export function Footer(props:FooterProps){
return <div>{props.text}</div>
}