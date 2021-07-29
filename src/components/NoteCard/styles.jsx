import styled from "styled-components";

export const NoteCardStyled = styled.article`
    min-width: 40%;
    max-width: 100%;
    box-shadow: ${props => props.theme.hoverState} 0px 1px 2px 0px,  ${props => props.theme.hoverState} 0px 1px 3px 1px;
    overflow: hidden;
    border-radius: 8px;

`

export const NoteCardHeader = styled.header`
    display: flex;
    align-items: center;
    padding: .5rem;
    position: relative;

    button {
        outline: none;
        border: none;
        background: transparent;
        position: absolute;
        width: 20px;
        height: 30px;
        font-size: 1rem;
        top: .5rem;
        right: 1rem;
        color: ${props => props.theme.secondary};
        cursor: pointer;
    }
`   

export const CategoryWrap = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${props => {
        if(props.category === "work"){
            return "#ff5252"
        } else if(props.category === "money") {
            return "#218c74"
        } else if(props.category === "study"){
            return "#706fd3"
        } else {
            return "#ffb142"
        }
    }};
    color: #fff;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .5rem;
`

export const NoteCardTitle = styled.h3`
    font-weight: 500;
    font-size: 1.15rem;
` 

export const NoteCardContent = styled.p`
    padding: 1rem;
`