import React from 'react'
import { Link } from 'react-router'
import logo from '../../assets/img/argentBankLogo.png'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img className={styles.img} src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Link to="/sign-in" className={styles.sign}>
          <i className="fa fa-user-circle"></i>
          <span className={styles.signText}>Sign In</span>
        </Link>
      </nav>
    </div>
  )
}

export default Header
