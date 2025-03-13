import React, { FC, useContext, useEffect } from 'react'
import { motion } from 'motion/react'
import classes from './UpperMoviePage.module.css'
import ImageNotFound from '../../assets/images/NoImageFound.png'
import { AccountStates, CrewMember, productionCompany, productionCountry } from '../../../types'
import RatingNumber from '../../components/RatingNumber/RatingNumber'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider'
import MovieListManager from '../../components/MovieListManager/MovieListManager'
import RatingManager from '../../components/RatingManager/RatingManager'

interface UpperMoviePageProps {
  movieName: string;
  movieId: string;
  posterLink: string;
  countries: productionCountry[];
  companies: productionCompany[];
  releaseDate: string;
  runtime: number;
  directors: CrewMember[];
  backgroundImage: string;
  rating: number;
  status: AccountStates;
  voteCount: number;
  genres: string
}

const UpperMoviePage: FC<UpperMoviePageProps> = (
  {movieName, 
  posterLink,
  releaseDate,
  status,
  runtime,
  movieId,
  countries,
  directors,
  backgroundImage,
  rating,
  voteCount,
  genres,
  companies}) => {
    const sessionId = useContext(authContext).sessionId
    return (
    <div className={classes.upperFancyPage}>
      <div
        className={classes.backgroundContainer}
        style={
          backgroundImage != '' ?
          { backgroundImage: `url("https://media.themoviedb.org/t/p/original/${backgroundImage}")` }
          :
          { backgroundColor: `rgb(22, 22, 22)` }}>
      </div>
      <div className={classes.blackFade}></div>
      <div className={classes.infoDiv}>
        <motion.img 
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.6}}
        className={classes.poster} 
        src={posterLink ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${posterLink}` 
        : `${ImageNotFound}`}></motion.img>
        <div className={classes.infoNoPoster}>
          <motion.div 
          initial={{y: -30, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.4}}
          className={classes.upperInfoSide}>
            <h2>{movieName}</h2>
            { sessionId == 'none' ? <></> : 
              <MovieListManager 
              movieId={movieId} 
              favorite={status.favorite} 
              watchlist={status.watchlist}></MovieListManager>
            }
          </motion.div>
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.4, duration: 0.4}}>
            <h4 className={classes.genre}>rated <RatingNumber number={rating}></RatingNumber> ({voteCount})</h4>
            { sessionId !=  'none' ?
             <RatingManager sessionId={sessionId} movieId={movieId} rating={status.rated.value}></RatingManager>
            : <></>}
            <h4 className={classes.genre}>{genres}</h4>
            <h4 className={classes.generalInfo}>directed by {directors.map((item, index) => <span key={index}>{item.name + (index != directors.length - 1? ', ' : '')}</span>)}</h4>
            <h4 className={classes.generalInfo}>produced by {companies.map((item, index) => <span key={index}>{item.name + (index != companies.length - 1? ', ' : '')}</span>)}</h4>
            <h4 className={classes.generalInfo}>filmed in {countries.map((item, index) => <span key={index}>{item.name + (index != countries.length - 1? ', ' : '')}</span>)}</h4>
            <h4 className={classes.generalInfo}>{runtime} minutes long</h4>
            <h4 className={classes.generalInfo}>released in {releaseDate}</h4>
          </motion.div>
        </div>
      </div>
      <motion.div
      initial={{opacity: 1}}
      animate={{opacity: 0}}
      transition={{delay: 3, duration: 0.4}} 
      className={classes.scrollMe}><p>scroll for more info</p></motion.div>
    </div>
  )
}

export default UpperMoviePage
