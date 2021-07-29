import React from 'react'
import { Header, LinksContainer } from './styles'
import ThemeSwitcher from '../ThemeSwitcher'


export default function Index({toggleTheme}) {
    return (
        <Header>
            <span>Keep Notes</span>
            <LinksContainer>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
            </LinksContainer>

            <ThemeSwitcher toggleTheme={toggleTheme} />
        </Header>
    )
}
