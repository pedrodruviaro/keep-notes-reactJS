import styled from 'styled-components'

export const Menu = styled.aside`
    grid-area: aside;
    box-shadow: rgba(0, 0, 0, 0.04) 3px 0px 5px;
`

export const MenuTitle = styled.h2`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    text-align: center;
    padding: 1.5rem;

    &::after {
        content: "";
        width: 50px;
        height: 2px;
        display: block;
        margin: .25rem auto 0 auto;

        background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
    }
`

export const LinksList = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuLink = styled.li`
    display: flex;
    
    a {
        display: flex;
        align-items: center;
        flex: 1;
        padding: .75rem;
        padding-left: 1rem;
        color: ${props => props.theme.text}
    }

    svg {
        color: ${props => props.theme.secondary};
        font-size: 1.25rem;
        margin-right: .75rem;
    }


    &:hover {
        background-color: ${props => props.theme.hoverState};
    }

    .active {
        &::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-left: 1rem;
        background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
        opacity: .7;
        }
    }
`