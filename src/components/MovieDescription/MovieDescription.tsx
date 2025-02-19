import React from 'react'
import classes from './MovieDescription.module.css'

interface MovieDescriptionProps {
  description: string
}

const MovieDescription: React.FC<MovieDescriptionProps> = ({description}) => {
  return (
    <div className={classes.descriptionContainer}>
      <h1 className={classes.sectionName}>DESCRIPTION</h1>
      <p className={classes.descriptionText}>{description}</p>
    </div>
  )
}


export default MovieDescription
