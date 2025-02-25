import React from 'react'
import classes from './MovieDescription.module.css'

interface MovieDescriptionProps {
  children: React.ReactNode
}

const MovieDescription: React.FC<MovieDescriptionProps> = ({children}) => {
  return (
    <div className={classes.descriptionContainer}>
      <h1 className={classes.sectionName}>DESCRIPTION</h1>
      <p className={classes.descriptionText}>{children}</p>
    </div>
  )
}


export default MovieDescription
