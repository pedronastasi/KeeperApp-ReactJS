import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
import AddNotes from "./AddNotes";

export default function App() {

    const [notes2, setNotes2] = useState([])

    function createNotes(note, index) {
        return <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
        />

    }

    function addNote(note) {
        setNotes2(prevValue => [...prevValue, note])
        console.log(notes2)
    }

    function deleteNote(id) {
        console.log('delete')
        setNotes2(prevValue =>{ 
            return (prevValue.filter((note, index) => index !== id))
        })


    }



    return <>
        <Header />
        <AddNotes onAdd={addNote} />
        <div>
            {notes2.map(createNotes)}
        </div>
        <Footer />
    </>

}
