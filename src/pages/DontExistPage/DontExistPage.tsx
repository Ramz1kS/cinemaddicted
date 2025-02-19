import React from 'react'
import { Link } from 'react-router-dom'
import classes from './DontExistPage.module.css'

const DontExistPage = () => {
  return (
    <div className={classes.pageCanvas}>
      <h3>Unfortunately, the page you're looking for does not exist {':('}</h3>
      <Link to={'/list'} className={classes.goBack}>go to search page</Link>
    </div>
  )
}

export default DontExistPage
