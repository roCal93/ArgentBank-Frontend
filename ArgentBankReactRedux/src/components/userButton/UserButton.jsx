import React, { useEffect } from 'react'
import { getUser } from '../../features/userInfoSlice' // Importing the action to fetch user information
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './userButton.module.scss'

const UserButton = () => {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.userInfo) // Accessing user info, loading, and error states from Redux

  // Effect hook to fetch user data when the component mounts
  useEffect(() => {
    dispatch(getUser()) // Dispatching the action to fetch user information
  }, [dispatch])
  if (loading) {
    return <p>Chargement...</p>
  }

  if (error) {
    return <p>Erreur : {error}</p>
  }

  return (
    <div>
      {user ? ( // Conditional rendering based on the presence of a user
        <Link to="/user" className={styles.sign}>
          <i className="fa fa-user-circle"></i>
          <span className={styles.text}>{user.body.userName}</span>
        </Link>
      ) : (
        <p>Aucun utilisateur trouvé.</p>
      )}
    </div>
  )
}
export default UserButton
