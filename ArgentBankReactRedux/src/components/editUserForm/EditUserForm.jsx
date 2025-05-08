import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from './editUserForm.module.scss'
import { userName } from './editUserFormSlice' // Import action for updating username
import { getUser } from '../../features/userInfoSlice' // Import action to fetch user information

const EditUserForm = ({ isActive, setIsActive, user }) => {
  const dispatch = useDispatch() // Get the dispatch function for sending actions to the store
  const status = useSelector((state) => state.newUserName.status) // Get the loading status from the store
  const error = useSelector((state) => state.newUserName.error) // Get any error messages from the store
  const [newUserName, setNewUserName] = useState(user.userName) // Local state for managing the new username input
  const [errorMessage, setErrorMessage] = useState('') // State to manage error messages

  // Effect hook to update the newUserName state if the user prop changes
  useEffect(() => {
    if (user) {
      setNewUserName(user.userName)
    }
  }, [user]) // Dependency on user prop to re-run the effect

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newUserName.trim() === '') {
      // Check if newUserName is empty or whitespace
      setErrorMessage('Username cannot be empty!') // Set error message
    } else {
      setErrorMessage('') // Clear error message if there's a valid username
      // Dispatch action to update username
      dispatch(userName({ userName: newUserName })).then(() => {
        dispatch(getUser()) // After updating, fetch the updated user info
        setIsActive(false)
      })
    }
  }
  return (
    <div>
      <section className={styles.content}>
        <h1>Edit user info</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={newUserName}
              onChange={(e) => {
                setNewUserName(e.target.value)
                if (e.target.value.trim() !== '') {
                  setErrorMessage('') // Clear error message when not empty
                }
              }}
              autoComplete="on"
            />
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              readOnly
              placeholder={user ? user.firstName : ''}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              readOnly
              placeholder={user ? user.lastName : ''}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button} type="submit">
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={styles.button}
            >
              cancel
            </button>
          </div>
        </form>
        {status === 'loading' && (
          <div className={styles.message}>Loading...</div>
        )}
        {status === 'failed' && (
          <div className={`${styles.message} ${styles.error}`}>
            Error: {error}
          </div>
        )}
      </section>
    </div>
  )
}

export default EditUserForm
