import { useDispatch, useSelector } from 'react-redux'
import styles from './editUserForm.module.scss'
import { userName } from './editUserFormSlice'
import { useEffect, useState } from 'react'
import { getUser } from '../../features/userInfoSlice'

const EditUserForm = ({ isActive, setIsActive, user }) => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.newUserName.status)
  const error = useSelector((state) => state.newUserName.error)
  const [newUserName, setNewUserName] = useState(user.userName)

  useEffect(() => {
    if (user) {
      setNewUserName(user.userName)
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userName({ userName: newUserName })).then(() => {
      dispatch(getUser())
      setIsActive(false)
    })
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
              onChange={(e) => setNewUserName(e.target.value)}
            />
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
