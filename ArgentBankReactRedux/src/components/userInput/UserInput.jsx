import React from 'react'
import styles from './userInput.module.scss'

const UserInput = () => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
    </div>
  )
}

export default UserInput
