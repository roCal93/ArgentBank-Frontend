import React, { useEffect, useState } from 'react'
import styles from './user.module.scss'
import { accountList } from '../../accountList'
import Account from '../../components/account/Account'
import EditUserForm from '../../components/editUserForm/EditUserForm'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUser } from '../../features/userInfoSlice' // Importing the async thunk to fetch user data

const User = () => {
  const [isActive, setIsActive] = useState(false) // State to toggle edit form visibility
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated) // Accessing authentication status from Redux

  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.userInfo) // Accessing user information and states from Redux
  const currentUser = user?.body // Extracting user data safely

  // Fetch user data when the component mounts
  useEffect(() => {
    dispatch(getUser()) // Dispatching the action to fetch user information
  }, [dispatch])

  // Setting the document title if the current user exists
  if (currentUser) {
    document.title = `Argent Bank - ${currentUser.userName}`
  }

  if (loading) {
    return <p>Chargement...</p>
  }

  if (error) {
    return <p>Erreur : {error}</p>
  }
  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <div className={styles.main}>
      {isActive ? ( // Conditional rendering to show edit form or welcome message
        <EditUserForm
          isActive={isActive}
          setIsActive={setIsActive}
          user={currentUser}
        />
      ) : (
        <div className={styles.welcome}>
          <h2>
            Welcome back
            <br />
            {currentUser
              ? `${currentUser.firstName} ${currentUser.lastName}!`
              : 'Utilisateur inconnu'}
          </h2>
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
