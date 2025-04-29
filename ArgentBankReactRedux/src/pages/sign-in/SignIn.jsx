import React from 'react'
import styles from './SignIn.module.scss'
import SignInForm from '../../components/signInForm/SignInForm'

const SignIn = () => {
  return (
    <div className={styles.main}>
      <SignInForm />
    </div>
  )
}

export default SignIn
