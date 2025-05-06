import React, { useEffect, useState } from 'react'
import styles from './user.module.scss'
import { accountList } from '../../accountList'
import Account from '../../components/account/Account'
import EditUserForm from '../../components/editUserForm/EditUserForm'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../features/UserInfoSlice'

const User = () => {
  const [isActive, setIsActive] = useState(false)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.userInfo)
  const currentUser = user?.body

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  if (loading) {
    return <p>Chargement...</p>
  }

  if (error) {
    return <p>Erreur : {error}</p>
  }
  if (!isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <div className={styles.main}>
      {isActive ? (
        <EditUserForm
          isActive={isActive}
          setIsActive={setIsActive}
          user={currentUser}
        />
      ) : (
        <div className={styles.welcome}>
          <h1>
            Welcome back
            <br />
            {currentUser
              ? `${currentUser.firstName} ${currentUser.lastName}!`
              : 'Utilisateur inconnu'}
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
