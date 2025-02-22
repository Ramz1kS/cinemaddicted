import React, { FC } from 'react'
import classes from './ExtraMovieInfo.module.css'
import ActorsList from '../../components/ActorsList/ActorsList'
import MovieDescription from '../../components/MovieDescription/MovieDescription'
import { CastMember, Images } from '../../../types';
import MediaContainer from '../../components/MediaContainer/MediaContainer';

interface ExtraMovieInfo {
  description: string;
  cast: CastMember[];
  images: Images;
}

const ExtraMovieInfo: FC<ExtraMovieInfo> = ({description, cast, images}) => {
  return (
    <div className={classes.pageCanvas}>
      <ActorsList cast={cast}></ActorsList>
      <MovieDescription>{description}</MovieDescription>
      <MediaContainer 
      backdrops={images.backdrops} 
      posters={images.posters}></MediaContainer>
    </div>
  )
}

export default ExtraMovieInfo
