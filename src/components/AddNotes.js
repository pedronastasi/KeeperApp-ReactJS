import React, { useState } from 'react'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'



function AddNotes(props) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        props.onAdd(note)
        setNote({
            title: '',
            content: ''
        })



    }

    const [isExpanded, setIsExpanded] = useState(false)

    function handleClick() {
        setIsExpanded(true)
    }

    return (<>
        <form className='create-note' action="" onSubmit={handleSubmit}>
            {isExpanded &&
            <input type="text" placeholder='Title' name='title' value={note.title} onChange={handleChange} /> }
            
            <textarea
            name="content"
            id=""
            rows={isExpanded ? 3 : 1}
            placeholder='Take a note'
            value={note.content}
            onChange={handleChange}
            onClick={handleClick}> 
            </textarea>
            <Zoom in={isExpanded} onClick={handleSubmit}>
                <Fab><NoteAddIcon /></Fab>
            </Zoom>
        </form>
    </>
    )
}

export default AddNotes