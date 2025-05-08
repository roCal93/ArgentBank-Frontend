import React from 'react'
import styles from './signInOutButton.module.scss'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../signInForm/signInFormSlice' // Importing the logout action

const SignInOutButton = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated) // Accessing authentication status from Redux state

  // Function to handle user logout
  const handleLogout = () => {
    dispatch(logoutUser()) // Dispatching the logout action
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
