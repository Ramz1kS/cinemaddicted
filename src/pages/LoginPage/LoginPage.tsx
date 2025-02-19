import React, { useState } from 'react'
import NamedField from '../../components/NamedField/NamedField'
import classes from "./LoginPage.module.css"
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.loginMainDiv}>
      <p 
      onClick={() => navigate(-1)}
      className={classes.goBackButton}>go back</p>
      <div className={classes.infoContainer}>
        <h3>Logging in</h3>
        <div className={classes.centerer}>
          <NamedField name='login' hideText={false} isEmail={false}></NamedField>
          <NamedField name='password' hideText={true} isEmail={false}></NamedField>
          <h3 className={classes.nextButton}>Log in</h3>
        </div>
      </div>
      <div className={classes.bottomLink}>
        <Link to='/register/'><h3>go to registration</h3></Link>
      </div>
    </div>
  )
}

export default LoginPage
