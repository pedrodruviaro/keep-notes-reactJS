import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import  NoteCard  from '../NoteCard'
import { NotesList, NotesWrap } from './styles'
import TodoCard from '../TodoCard'


export default function Index() {

    const [notes, setNotes] = useState([])

    const [todos, setTodos] = useState([])

    function deleteNote(id){
        fetch('http://localhost:5000/notes/' + id , {
            method: "DELETE"
        })

        const updatedNotes = notes.filter(note => note.id !== id)
        setNotes(updatedNotes)
    }

    function deleteTodo(){
        
    }

    useEffect(() => {
        fetch('http://localhost:5000/notes')
            .then(resp => resp.json())
            .then(data => setNotes(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(resp => resp.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <NotesWrap>
            <NotesList>
                {notes.map(note => (
                    <NoteCard note={note} deleteNote={deleteNote} />
                ))}
            </NotesList>


        {/* todos */}
            <div>
                {todos.map(todo => (
                    <TodoCard todo={todo} key={todo} deleteTodo={deleteTodo} />
                ))}
            </div>
        </NotesWrap>
    )
}
