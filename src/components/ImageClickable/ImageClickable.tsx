import React, { FC, useEffect, useState } from 'react'
import classes from './ImageClickable.module.css'
import { motion } from 'motion/react';

interface ImageClickableProps {
  imageLink: string;
  externalLink: string;
  isPoster: boolean
}

const ImageClickable: FC<ImageClickableProps> = ({imageLink, externalLink, isPoster}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  useEffect(() => {
    console.log(imageLink)
  }, [])
  return (
    <a href={externalLink} 
    target='_blank'
    onMouseOver={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={classes.container}>
      <div
      style={{backgroundImage: `url("${imageLink}")`,
            width: isPoster ? '600px' : '200px'}}
      className={classes.image}>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: isHovered ? 1 : 0}}
        transition={{duration: 0.2}}
        className={classes.clickMe}>
          <p>click to see</p>
          <p>full image</p>
        </motion.div>
      </div>
    </a>
  )
}

export default ImageClickable
