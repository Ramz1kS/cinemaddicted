import React from 'react'
import { motion } from 'motion/react'
import classes from './UpperMoviePage.module.css'
import TestBackgroundImage from '../../assets/images/test/moviepageback.png'
import MoviePoster from '../../assets/images/test/movieposter.png'


const UpperMoviePage = () => {
  return (
    <div className={classes.upperFancyPage}>
      <div
        className={classes.backgroundContainer}
        style={{ backgroundImage: `url(${TestBackgroundImage})` }}>
      </div>
      <div className={classes.blackFade}></div>
      <div className={classes.infoDiv}>
        <motion.img 
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.6}}
        className={classes.poster} 
        src={MoviePoster}></motion.img>
        <div className={classes.infoNoPoster}>
          <motion.div 
          initial={{y: -30, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.4}}
          className={classes.upperInfoSide}>
            <h2>Snatch</h2>
            <p>add to wanted movies</p>
          </motion.div>
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.4, duration: 0.4}}>
            <h4 className={classes.genre}>comedy, crime</h4>
            <h4 className={classes.generalInfo}>directed by Guy Ritchie</h4>
            <h4 className={classes.generalInfo}>produced by Columbia Pictures, SKA Films</h4>
            <h4 className={classes.generalInfo}>filmed in United Kingdom, United States</h4>
            <h4 className={classes.generalInfo}>104 minutes long</h4>
            <h4 className={classes.generalInfo}>released in 2000</h4>
          </motion.div>
        </div>
      </div>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.8, duration: 0.6}} 
      className={classes.scrollMe}><p>scroll for more info</p></motion.div>
    </div>
  )
}

export default UpperMoviePage
