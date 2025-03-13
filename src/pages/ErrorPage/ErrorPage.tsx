import React, { FC } from 'react'
import { motion } from 'motion/react'
import classes from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

interface ErrorPageProps {
  isPage: boolean,
  message?: string,
  children?: React.ReactNode
}

const ErrorPage: FC<ErrorPageProps> = ({isPage, message, children}) => {
  return (
    <div className={classes.pageCanvas}
    style={{height: isPage ? "100vh" : "auto"}}>
      <motion.h3 className={classes.errorMsg}>
        Unfortunately, we could not load the data :c</motion.h3>
        <p className={classes.errorMsg}>{message}</p>
        {children}
      { isPage ? <Link to={'/list/'}><p>go back</p></Link> : null}
    </div>
  )
}

export default ErrorPage
