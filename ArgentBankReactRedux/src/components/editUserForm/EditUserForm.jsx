import React from 'react'
import styles from './editUserForm.module.scss'
import UserInput from '../userInput/UserInput'

const EditUserForm = ({ isActive, setIsActive }) => {
  return (
    <div>
      <section className={styles.content}>
        <h1>Edit user info</h1>
        <form>
          <UserInput />
          <div className={styles.inputWrapper}>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" readOnly placeholder="Coucou" />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" readOnly placeholder="Salut" />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Save</button>
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={styles.button}
            >
              cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default EditUserForm
