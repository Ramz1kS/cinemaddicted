import React from 'react'
import classes from './LowerMoviePage.module.css'
import ActorsList from '../../components/ActorsList/ActorsList'
import MovieDescription from '../../components/MovieDescription/MovieDescription'

const LowerMoviePage = () => {
  const description = "Turkish and his close friend/accomplice Tommy get pulled into the world of match fixing \
  by the notorious Brick Top. Things get complicated when the boxer they had lined up gets badly beaten by Mickey, \
  who comes into the equation after Turkish, an unlicensed boxing promoter wants to buy a caravan off of Travellers. \
  They then try to convince Mickey not only to fight for them, but to lose for them too. Whilst all this is going on, \
  a huge diamond heist takes place, and a fistful of motley characters enter the story, including 'Cousin Avi', 'Boris The Blade'\
  , 'Franky Four Fingers' and 'Bullet Tooth Tony'. Things go from bad to worse as it all becomes about the money, \
  the guns, and the damned dog."
  return (
    <div className={classes.pageCanvas}>
      <ActorsList></ActorsList>
      <MovieDescription description={description}></MovieDescription>
    </div>
  )
}

export default LowerMoviePage
