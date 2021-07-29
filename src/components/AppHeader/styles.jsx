import styled from 'styled-components'

export const Header = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    box-shadow: ${props => props.theme.hoverState} 0px 1px 7px;

    span {
        width: 13rem;
        text-align: center;
    }

    a {
        margin: 0 1rem;
        outline: none;
    }

    a:hover,
    a:focus {
        background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
        color: #fff;
        padding: .25rem .75rem;
        margin: 0 .25rem;
        border-radius: 20px;
    }
`

export const LinksContainer = styled.div`
    width: 100%;
    flex: 1;
    text-align: right;
`