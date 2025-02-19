import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NamedField from '../../components/NamedField/NamedField'
import classes from "./RegisterPage.module.css"

const RegisterPage = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.registerMainDiv}>
      <p 
      onClick={() => navigate(-1)}
      className={classes.goBackButton}>go back</p>
      <div className={classes.infoContainer}>
        <h3>Registration</h3>
        <div className={classes.centerer}>
          <NamedField name='login' hideText={false} isEmail={false}></NamedField>
          <NamedField name='email' hideText={false} isEmail={false}></NamedField>
          <NamedField name='password' hideText={true} isEmail={false}></NamedField>
          <NamedField name='password (same)' hideText={true} isEmail={false}></NamedField>
          <h3 className={classes.nextButton}>Log in</h3>
        </div>
      </div>
      <div className={classes.bottomLink}>
        <Link to='/login/'><h3>got an account? sign in instead!</h3></Link>
      </div>
    </div>
  )
}

export default RegisterPage
