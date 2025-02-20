import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import classes from './NavTabLeft.module.css'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'

const NavTabLeft = () => {
  const [menuNeeded, setMenuNeeded] = useState(false)
  const sessionId = useContext(authContext).sessionId
  return (
    <>
    <motion.div
    initial={{scale: 1}}
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}
    className={classes.summoner}
    onClick={() => {setMenuNeeded((prev) => !prev)}}>
      <div className={classes.whiteLine}></div>
      <div className={classes.whiteLine}></div>
      <div className={classes.whiteLine}></div>
    </motion.div>
    <AnimatePresence>
      {menuNeeded ?
      <motion.div 
      initial={{width: 0}}
      animate={{width: 300}}
      exit={{width: 0}}
      className={classes.leftMenu}>
        <h3
        className={classes.menuElement} 
        onClick={() => setMenuNeeded(false)}>Hide menu</h3>
        <Link to='/list'>
          <h3
          className={classes.menuElement}>Go to wishlist</h3></Link>
        <Link to={ sessionId == 'none' ? '/gototmdb' : '/account'}>
          <h3
          className={classes.menuElement}>{ sessionId == 'none' ? "Sign in" : "Account"}</h3></Link>
      </motion.div> 
      : null}
    </AnimatePresence>
    </>
  )
}

export default NavTabLeft
