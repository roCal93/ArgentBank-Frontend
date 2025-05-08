import React from 'react'
import { Link } from 'react-router'
import logo from '../../assets/img/argentBankLogo.png'
import styles from './header.module.scss'
import SignInOutButton from '../signInOutButton/SignInOutButton'
import { useSelector } from 'react-redux'
import UserButton from '../userButton/UserButton'

const Header = () => {
  // Using useSelector to get authentication status from Redux state
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img className={styles.img} src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className={styles.links}>
          {isAuthenticated && <UserButton />}
          <SignInOutButton />
        </div>
      </nav>
    </div>
  )
}

export default Header
