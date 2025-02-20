import React, { FC } from 'react'
import { motion } from 'motion/react'
import classes from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

interface ErrorPageProps {
  isPage: boolean
}

const ErrorPage: FC<ErrorPageProps> = ({isPage}) => {
  return (
    <div className={classes.pageCanvas}
    style={{height: isPage ? "100vh" : "100%"}}>
      <motion.h3 className={classes.errorMsg}>
        Unfortunately, we could not load the data :c</motion.h3>
      { isPage ? <Link to={'/list/'}><p>go back</p></Link> : null}
    </div>
  )
}

export default ErrorPage
