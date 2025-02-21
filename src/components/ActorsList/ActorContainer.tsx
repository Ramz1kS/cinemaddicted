import React from 'react'
import classes from './ActorContainer.module.css'

interface ActorContainerProps {
  name: string,
  image: string;
  character: string
}

const ActorContainer: React.FC<ActorContainerProps> = ({name, image, character}) => {
  return (
    <div className={classes.anotherContainerOhMyGod}>
      <div className={classes.actorContainer}>
        <div 
        style={{backgroundImage: `url(${image})`}}
        className={classes.actorImage}
        ></div>
        <h3 className={classes.name}>{name}</h3>
        <h4 className={classes.name}>{character}</h4>
      </div>
    </div>
  )
}

export default ActorContainer
