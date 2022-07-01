import React from 'react'
import classes from './main-header.module.css'
import Link from 'next/link'
const LeftNav = () => {
  return (
    <nav className={classes.nav}>
    <ul>
      <li>
        <Link href="/perfumes" passHref>
          COLEECTION
        </Link>
      </li>
      <li>
        <Link href="/women" passHref>
          WOMEN
        </Link>
      </li>
      <li>
        <Link href="/men" passHref>
          MEN
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default LeftNav