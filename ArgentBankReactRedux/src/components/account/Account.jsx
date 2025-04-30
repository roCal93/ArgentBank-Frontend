import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './account.module.scss'
import { accountList } from '../../accountList'

const Account = (props) => {
  const selectedAccount = accountList.filter(
    (account) => account.id === `${props.id}`
  )
  const { id } = useParams()

  return (
    <div>
      {selectedAccount.map((account) =>
        id === account.id ? (
          <section key={account.id} className={styles.transaction}>
            <div className={styles.wrapper}>
              <h3 className={styles.titleWhite}>{account.title}</h3>
              <p className={styles.amountWhite}>{account.content}</p>
              <p className={styles.descriptionWhite}>Available Balance</p>
            </div>
            <Link to="/user">
              <button className={styles.exitButton}>×</button>
            </Link>
          </section>
        ) : (
          <section key={account.id} className={styles.account}>
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{account.title}</h3>
              <p className={styles.amount}>{account.content}</p>
              <p className={styles.description}>Available Balance</p>
            </div>
            <div className={styles.buttonWrapper}>
              <Link to={`/transaction/${account.id}`}>
                <button className={styles.button}>View transactions</button>
              </Link>
            </div>
          </section>
        )
      )}
    </div>
  )
}

export default Account
