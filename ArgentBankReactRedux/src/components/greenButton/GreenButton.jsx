import React from 'react'
import styles from './greenButton.module.scss'

const GreenButton = (props) => {
  return (
    <div>
      <button className={styles.button}>{props.content}</button>
    </div>
  )
}

export default GreenButton
