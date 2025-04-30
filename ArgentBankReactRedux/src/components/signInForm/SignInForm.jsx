import React from 'react'
import styles from './signInForm.module.scss'
import { Link } from 'react-router-dom'
import UserInput from '../userInput/UserInput'

const SignInForm = () => {
  return (
    <div>
      <section className={styles.content}>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <UserInput />
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/user">
            <button className={styles.button}>Sign In</button>
          </Link>
        </form>
      </section>
    </div>
  )
}

export default SignInForm
