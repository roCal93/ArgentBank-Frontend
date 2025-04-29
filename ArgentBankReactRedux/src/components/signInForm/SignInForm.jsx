import React from 'react'
import styles from './signInForm.module.scss'
import { Link } from 'react-router-dom'
import GreenButton from '../greenButton/Greenbutton'

const SignInForm = () => {
  return (
    <div>
      <section className={styles.content}>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/user">
            <GreenButton content="Sign in" />
          </Link>
        </form>
      </section>
    </div>
  )
}

export default SignInForm
