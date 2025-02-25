import React, { FC } from 'react'
import { ImageTMDB } from '../../../types'
import classes from './AllMediaList.module.css'
import { AnimatePresence, motion } from 'motion/react'
import ImagesList from '../ImagesList/ImagesList'

interface AllMediaListProps {
  images: ImageTMDB[];
  isPoster: boolean;
  isNeeded: boolean;
  setIsNeeded: (val: boolean) => void
}

const AllMediaList: FC<AllMediaListProps> = ({images, isPoster, isNeeded, setIsNeeded}) => {
  return (
    <AnimatePresence>
    { isNeeded ? 
    <motion.div 
    onClick={() => setIsNeeded(false)}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.2}}
    exit={{opacity: 0}}
    className={classes.darkBackground}>
      <div 
      onClick={(e) => e.stopPropagation()}
      className={classes.allMediaContainer}>
        <h3 className={classes.closeMeButton}
        onClick={() => setIsNeeded(false)}>X</h3>
        <ImagesList imagesLinks={images} isPoster={isPoster}></ImagesList>
      </div>
    </motion.div> : null }
    </AnimatePresence>
  )
}



export default AllMediaList
