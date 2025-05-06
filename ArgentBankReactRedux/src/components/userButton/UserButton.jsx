import React, { useEffect } from 'react'
import { getUser } from '../../features/UserInfoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './userButton.module.scss'
const UserButton = () => {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.userInfo)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  if (loading) {
    return <p>Chargement...</p>
  }

  if (error) {
    return <p>Erreur : {error}</p>
  }

  return (
    <div>
      {user ? (
        <Link to="/user" className={styles.sign}>
          <i className="fa fa-user-circle"></i>
          <span className={styles.text}>{user.body.firstName}</span>
        </Link>
      ) : (
        <p>Aucun utilisateur trouvé.</p>
      )}
    </div>
  )
}
export default UserButton
