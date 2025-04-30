import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { accountList } from '../../accountList'
import Account from '../../components/account/Account'

const Transaction = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const account = accountList.find((a) => a.id === id)
    console.log(account)
    if (!account) {
      navigate('*')
    }
  })

  return (
    <div>
      <Account id={id} />
    </div>
  )
}

export default Transaction
