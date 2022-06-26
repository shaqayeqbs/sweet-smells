import React from 'react'
import Mainheader from './main-header'
import classes from  './layout.module.css'
const Layout = (props: any) => {
  return (
    <>
      <Mainheader />
      <main className={classes.layout}>
        {props.children}
      </main>
    </>
  )
}

export default Layout