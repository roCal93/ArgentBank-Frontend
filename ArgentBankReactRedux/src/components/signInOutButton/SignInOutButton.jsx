import React from 'react'
import styles from './signInOutButton.module.scss'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../signInForm/signInFormSlice'

const SignInOutButton = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const handleLogout = () => {
    dispatch(logoutUser())
  }
  return (
    <div>
      {isAuthenticated ? (
        <Link to="/" onClick={handleLogout} className={styles.sign}>
          <i className="fa fa-sign-out"></i>
          <span className={styles.text}>Sign Out</span>
        </Link>
      ) : (
        <Link to="/sign-in" className={styles.sign}>
          <i className="fa fa-user-circle"></i>
          <span className={styles.text}>Sign In</span>
        </Link>
      )}
    </div>
  )
}

export default SignInOutButton
