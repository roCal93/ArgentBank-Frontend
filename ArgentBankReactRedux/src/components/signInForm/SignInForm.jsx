import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './signInForm.module.scss'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './signInFormSlice'

const SignInForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector((state) => state.login.status)
  const error = useSelector((state) => state.login.error)
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isRemembered, setIsRemembered] = useState(false)

  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail')
    const savedPassword = localStorage.getItem('savedPassword')
    if (savedEmail) setNewEmail(savedEmail)
    if (savedPassword) setNewPassword(savedPassword)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser({ email: newEmail, password: newPassword })).then(
      (action) => {
        if (action.type === 'data/postData/fulfilled') {
          if (isRemembered) {
            localStorage.setItem('savedEmail', newEmail)
            localStorage.setItem('savedPassword', newPassword)
          } else {
            localStorage.removeItem('savedEmail')
            localStorage.removeItem('savedPassword')
          }
          navigate('/user')
        }
      }
    )
    setNewEmail('')
    setNewPassword('')
  }
  return (
    <div>
      <section className={styles.content}>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              id="email"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              id="password"
            />
          </div>
          <div className={styles.inputRemember}>
            <input
              type="checkbox"
              id="remember-me"
              checked={isRemembered}
              onChange={(e) => setIsRemembered(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
        {status === 'loading' && (
          <div className={styles.message}>Loading...</div>
        )}
        {status === 'failed' && (
          <div className={`${styles.message} ${styles.error}`}>
            Error: {error}
          </div>
        )}
      </section>
    </div>
  )
}

export default SignInForm
