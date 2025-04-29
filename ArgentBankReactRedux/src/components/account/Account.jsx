import React from 'react'
import styles from './account.module.scss'
import GreenButton from '../greenButton/GreenButton'

const Account = (props) => {
  return (
    <div>
      <section className={styles.account}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.amount}>{props.content}</p>
          <p className={styles.description}>Available Balance</p>
        </div>
        <div className={styles.buttonWrapper}>
          <GreenButton content="View transactions" />
        </div>
      </section>
    </div>
  )
}

export default Account
