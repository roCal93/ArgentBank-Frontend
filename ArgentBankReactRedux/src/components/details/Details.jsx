import React, { useEffect, useState } from 'react'
import styles from './details.module.scss'

const Details = ({ id }) => {
  const categories = ['Category 1', 'Category 2', 'Category 3']

  // Unique key for local storage
  const localStorageKey = `notesList-${id}`

  const [note, setNote] = useState('') // State to manage the current note input
  const [notesList, setNotesList] = useState(() => {
    // Retrieve notes from local storage when the component is initialized
    const savedNotes = localStorage.getItem(localStorageKey)
    return savedNotes ? JSON.parse(savedNotes) : [] // Parse and return notes or return an empty array
  })

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(notesList))
  }, [notesList, localStorageKey])

  // Function to handle note input change
  const handleNoteChange = (event) => {
    setNote(event.target.value)
  }

  // Function to add a new note
  const handleAddNote = (e) => {
    e.preventDefault()
    if (note.trim()) {
      // Check if the note is not just whitespace
      setNotesList([...notesList, note]) // Add the note to the list
      setNote('') // Clear the input field
    }
  }

  // Function to remove a note
  const handleDeleteNote = (index) => {
    const newNotesList = notesList.filter((_, i) => i !== index) // Remove the note at the specified index
    setNotesList(newNotesList) // Update the notes list
  }

  return (
    <div className={styles.detail}>
      <div className={styles.title}>
        <p>Transaction type</p>
        <label htmlFor={`categorySelect-${id}`}>Category</label>
        <label htmlFor={`note-${id}`}>Note</label>
      </div>
      <div className={styles.info}>
        <p>Electronic</p>
        <select name="category" id={`categorySelect-${id}`}>
          <option value="">Set a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <form onSubmit={handleAddNote} className={styles.noteInput}>
          <input
            id={`note-${id}`}
            type="text"
            value={note}
            onChange={handleNoteChange}
          />
          <button type="submit">Add</button>
          {notesList.map((noteItem, index) => (
            <div key={index} className={styles.noteItem}>
              <p>{noteItem}</p>
              <button onClick={() => handleDeleteNote(index)}>&#10060;</button>
            </div>
          ))}
        </form>
      </div>
    </div>
  )
}

export default Details
