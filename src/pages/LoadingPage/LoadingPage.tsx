import React from 'react'
import { motion } from 'motion/react'
import classes from './LoadingPage.module.css'

interface LoadingPageProps {
  isPage: boolean
}

const LoadingPage: React.FC<LoadingPageProps> = ({isPage}) => {
  return (
    <div className={classes.pageCanvas}
    style={{height: isPage ? "100vh" : "auto"}}>
      <motion.h3
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{yoyo: Infinity, duration: 0.5}}>
        Loading... Please wait</motion.h3>
    </div>
  )
}

export default LoadingPage
