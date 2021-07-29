import React from 'react'
import { Header, LinksContainer } from './styles'


export default function index() {
    return (
        <Header>
            <span>Keep Notes</span>
            <LinksContainer>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
            </LinksContainer>
        </Header>
    )
}
