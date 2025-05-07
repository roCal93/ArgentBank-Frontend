import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { accountList } from '../../accountList'
import { transactionList } from '../../transactionList'
import styles from './transaction.module.scss'
import Account from '../../components/account/Account'
import Collapsible from '../../components/collapsible/Collapsible'

const Transaction = () => {
  const { id } = useParams()
  const account = accountList.find((a) => a.id === id)
  const navigate = useNavigate()

  useEffect(() => {
    const account = accountList.find((a) => a.id === id)
    if (!account) {
      navigate('*')
    }
  })

  return (
    <div>
      <title>Argent Bank - Transaction</title>
      <Account id={id} />
      <div className={styles.title}>
        <div className={styles.title1}>
          <h2>Date</h2>
          <h2>Description</h2>
        </div>
        <div className={styles.title2}>
          <h2>Amount</h2>
          <h2>Balance</h2>
        </div>
      </div>
      <ul className={styles.collapsible}>
        {transactionList.map((data) => (
          <li className={styles.list} key={data.id}>
            <Collapsible
              id={data.id}
              date={data.date}
              title={data.title}
              amount={data.amount}
              balance={account.content}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Transaction
