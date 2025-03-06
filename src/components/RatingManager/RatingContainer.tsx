import React, { useEffect, useState } from 'react'
import classes from './RatingContainer.module.css'
import { AnimatePresence, motion } from 'motion/react';
import RatingDescription from './RatingDescription';
import { BasicAnswer } from '../../../types';
import { useServer } from '../../hooks/useServer';

interface RatingContainerProps {
  isNeeded: boolean;
  setIsNeeded: (val: boolean) => void;
  setDisplayRating: (val: number) => void;
  rating: number;
  movieId: string;
  sessionId: string;
}

const RatingContainer: React.FC<RatingContainerProps> = ({isNeeded, setIsNeeded, setDisplayRating, movieId, sessionId, rating}) => {
  const [userRating, setUserRating] = useState(0)
  const [errorMsg, setErrMsg] = useState('none')
  const { isError, useData } = useServer<BasicAnswer>()

  const rateFilm = () => {
    if (userRating <= 0) 
      setErrMsg("You must really hate this movie! Unfortunately, rating must be bigger than zero :(")
    else if (userRating > 10) 
      setErrMsg("Seems like you really love it. But your rating can be 10 maximum :(") 
    else {
      useData(`https://api.themoviedb.org/3/movie/${movieId}/rating`, "POST", {
        session_id: sessionId,
        value: userRating
      }, () => {
        setDisplayRating(userRating)
        setIsNeeded(false);
      });
    }
  }

  const removeRating = () => {
    useData(`https://api.themoviedb.org/3/movie/${movieId}/rating`, "DELETE", {
      session_id: sessionId,
    }, () => {
      setDisplayRating(0)
      setIsNeeded(false);
    })
  }

  useEffect(() => {
  if (isError)
    setErrMsg("Unfortunately, we couldn't update the rating")
  }, 
  [isError])
  return (
    <AnimatePresence>
    { isNeeded ?
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
      onClick={() => setIsNeeded(false)}
      className={classes.darkBackground}>
        <div className={classes.ratingContainer}
        onClick={(e) => e.stopPropagation()}>
          <h3>How do you like this movie?</h3>
          <div>
            <input 
            className={classes.ratingInput}
            type='number'
            min='1'
            onChange={(e) => setUserRating(Number(e.target.value))}
            value={userRating}
            max='10'></input><p className={classes.inlineTen}>/10</p>
          </div>
          <RatingDescription rating={userRating}></RatingDescription>
          <motion.h3
          initial={{opacity: 0}}
          animate={{opacity: errorMsg == "none" ? 0 : 1 }}
          className={classes.errorMsg}>{errorMsg}</motion.h3>
          <p 
          onClick={rateFilm}
          className={classes.clickMe}>rate</p>
          { rating ? <p className={classes.clickMe}
          onClick={removeRating}>
            delete rating
          </p> : <></>}
        </div>
      </motion.div>
       : null}
    </AnimatePresence>
  )
}

export default RatingContainer
