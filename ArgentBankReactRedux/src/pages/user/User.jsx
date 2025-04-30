import React, { useState } from 'react'
import styles from './user.module.scss'
import { accountList } from '../../accountList'
import Account from '../../components/account/Account'
import EditUserForm from '../../components/editUserForm/EditUserForm'

const User = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.main}>
      {isActive ? (
        <EditUserForm isActive={isActive} setIsActive={setIsActive} />
      ) : (
        <div className={styles.welcome}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button
            onClick={() => setIsActive(!isActive)}
            className={styles.button}
          >
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <ul>
        {accountList.map((data) => (
          <li className={styles.list} key={data.id}>
            <Account id={data.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User
