import React, { FC, useState } from 'react'
import classes from './NamedField.module.css'

interface NamedFieldProps {
  name: string;
  hideText: boolean;
  isEmail: boolean;
}

const NamedField: FC<NamedFieldProps> = ({name, hideText, isEmail}) => {
  const [showHiddenText, setShowHiddenText] = useState(false)
  return (
    <div className={classes.inputDiv}>
      <input className={classes.input} type={hideText ? showHiddenText ? 'text' : 'password' : isEmail ? 'email' : 'text'} placeholder={name}></input>
      { hideText ? 
      <div 
      onClick={() => setShowHiddenText((prev) => !prev)}
      className={classes.showButton}>
        <p>{showHiddenText ? 'hide' : 'show'}</p>
      </div> : null }
    </div>
  )
}

export default NamedField
