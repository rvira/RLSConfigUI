import { Link } from '@remix-run/react';
import logo from '../../images/Logo.png'

import styles from './MainNavigation.css'

function MainNavigation() {
  return (
    <header className='main-header'>
      <link rel="stylesheet" type="text/css" href={styles} />

      <div className="menu-wrap">
      <Link to="/" className="logo-wrap">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <input type='checkbox' id='nav-tog' />
        <label htmlFor='nav-tog' className="drop-trigger">
          <span className="btn-bar top"></span>
          <span className='btn-bar middle'></span>
          <span className='btn-bar bottom'></span>
        </label>
        <nav className="main-nav">
          <label htmlFor='nav-tog' className='nav-revert'></label>
          <Link to="/" className="nav-item"><span>Home</span></Link>
          <Link to="/" className="nav-item"><span> Sign out </span></Link>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;