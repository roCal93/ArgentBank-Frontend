import React from 'react'
import styles from './user.module.scss'
import { accountList } from '../../accountList'
import Account from '../../components/account/Account'
import GreenButton from '../../components/greenButton/GreenButton'

const User = () => {
  return (
    <div className={styles.main}>
      <div className={styles.welcome}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <GreenButton content="Edit Name" />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <ul>
        {accountList.map((data) => (
          <li className={styles.list} key={data.id}>
            <Account title={data.title} content={data.content} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User
