import React from 'react'
import { NoteCardStyled, NoteCardHeader, CategoryWrap, NoteCardTitle, NoteCardContent } from './styles'
import { FaTrashAlt } from "react-icons/fa";

export default function index(props) {
    return (
        <NoteCardStyled>
            <NoteCardHeader>
                <CategoryWrap category={props.note.category} >
                    {props.note.category[0].toUpperCase()}
                </CategoryWrap>
                <NoteCardTitle>{props.note.title}</NoteCardTitle>

                <button onClick={() => {
                    props.deleteNote(props.note.id)
                }}>
                    <FaTrashAlt />
                </button>
            </NoteCardHeader>

            <NoteCardContent>{props.note.content}</NoteCardContent>
        </NoteCardStyled>
    )
}
