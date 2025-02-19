import React from 'react'
import { Link } from 'react-router-dom'
import classes from './StartingPage.module.css'

const StartingPage = () => {
  return (
    <div className={classes.pageCanvas}>
      <div className={classes.sideBlackFade}>
        <h1 className={classes.title}>CINEMADDICTED</h1>
        <p className={classes.smaller}>need to find a movie to watch? you’re on a right website!</p>
        <Link to={'/movie/'}><h3 className={classes.link}>get started</h3></Link>
      </div>
    </div>
  )
}

export default StartingPage
