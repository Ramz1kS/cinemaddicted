import React from 'react'
import classes from './ActorContainer.module.css'

interface ActorContainerProps {
  name: string,
  image: string
}

const ActorContainer: React.FC<ActorContainerProps> = ({name, image}) => {
  return (
    <div className={classes.anotherContainerOhMyGod}>
      <div className={classes.actorContainer}>
        <div 
        style={{backgroundImage: `url(${image})`}}
        className={classes.actorImage}
        ></div>
        <h3 className={classes.name}>{name}</h3>
      </div>
    </div>
  )
}

export default ActorContainer
