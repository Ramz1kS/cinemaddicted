import React, { FC } from 'react'
import classes from './ActorsList.module.css'
import ActorContainer from './ActorContainer'
import { CastMember } from '../../../types'
import PlaceholderPhoto from '../../assets/images/ActorPlaceholder.png'

interface ActorsListProps {
  cast: CastMember[]
}

const ActorsList: FC<ActorsListProps> = ({cast}) => {
  return (
    <div className={classes.actorsListContainer}>
      <h1 className={classes.sectionName}>CAST</h1>
      <div className={classes.actorsList}>
        {cast.map((item) => <ActorContainer key={item.id} 
        name={item.name} 
        character={item.character}
        image={!item.profile_path ? PlaceholderPhoto : `https://media.themoviedb.org/t/p/w276_and_h350_face/${item.profile_path}`}></ActorContainer>)}
      </div>
    </div>
  )
}

export default ActorsList
