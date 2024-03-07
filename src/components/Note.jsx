
import React, { useState } from 'react';

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState({ title: '', description: '' });
    const [editMode, setEditMode] = useState(false);

    const addNote = () => {
        if (currentNote.title && currentNote.description) {
            setNotes([...notes, currentNote]);
            setCurrentNote({ title: '', description: '' });
        } else {
            alert('Both title and description are required!');
        }
    };

    const deleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

    const editNote = (index) => {
        setCurrentNote(notes[index]);
        setEditMode(true);
    };

    const updateNote = () => {
        if (currentNote.title && currentNote.description) {
            const updatedNotes = [...notes];
            updatedNotes[notes.findIndex((note) => note.title === currentNote.title)] = currentNote;
            setNotes(updatedNotes);
            setCurrentNote({ title: '', description: '' });
            setEditMode(false);
        } else {
            alert('Both title and description are required!');
        }
    };

    return (
        <div>
            <div className='sub-containter'>
                <h1>Simple Note-Taking Application</h1>
                <div>

                    <input placeholder='Title'
                        type="text"
                        value={currentNote.title}
                        onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
                    />
                </div>
                <div className='textarea'>

                    <textarea placeholder='Content' rows={10}
                        value={currentNote.description}
                        onChange={(e) => setCurrentNote({ ...currentNote, description: e.target.value })}
                    />
                </div>
                <div className='btn'>
                    {editMode ? (
                        <button onClick={updateNote}>Update Note</button>
                    ) : (
                        <button onClick={addNote}>Add Note</button>
                    )}
                </div>
            </div>
            <hr></hr>
            <h2>Notes</h2>
            <div className="container" style={{ display: "flex", gap: "12px", }}>

                {notes.map((note, index) => (
                    <div key={index}>
                        <div className='text-container'>
                            <strong>{note.title}</strong>
                            <p>{note.description}</p>
                            <button onClick={() => editNote(index)}>Edit</button>
                            <button onClick={() => deleteNote(index)}>Delete</button>
                        </div>


                    </div>
                ))}

            </div>
        </div>
    );
};

export default NoteApp;
