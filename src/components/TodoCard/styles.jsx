import styled from "styled-components";

export const TodoWrap = styled.article`
    padding: 1rem;
    margin: 2rem auto;
    border-radius: 8px;
    width: 70%;
    position: relative;
    box-shadow: ${props => props.theme.hoverState} 0px 1px 2px 0px,  ${props => props.theme.hoverState} 0px 1px 3px 1px;
`

export const TodoTitle = styled.h3`
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.25rem;
`


export const TodoList = styled.ul``


export const TodoItem = styled.li`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.secondary};
    margin: .75rem 0;
    border-radius: 8px;
    padding: .5rem;

    p {
        flex: 1;
    }    

    button {
        outline: none;
        cursor: pointer;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 .25rem;
        border: none;
        color: ${props => props.theme.primary};
        border-radius: 3px;
    }

    svg {
        pointer-events: none;
    }

    .done {
        text-decoration: line-through;
        opacity: .6;
    }
`

export const DeleteTodoButton = styled.button`
        outline: none;
        cursor: pointer;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 .25rem;
        border: none;
        color: #FF5252;
        border-radius: 3px;
        position: absolute;
        top: .75rem;
        right: .25rem;
`