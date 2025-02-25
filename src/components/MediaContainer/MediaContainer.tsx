import React, { FC, useState } from 'react'
import classes from './MediaContainer.module.css'
import ButtonChoiceContainer from '../ButtonChoiceContainer/ButtonChoiceContainer'
import ImagesList from '../ImagesList/ImagesList'
import { ImageTMDB } from '../../../types'

interface MediaContainerProps {
  backdrops: ImageTMDB[];
  posters: ImageTMDB[];
}

const MediaContainer: FC<MediaContainerProps> = ({backdrops, posters}) => {
  const variants = ['backdrops', 'posters', 'videos']
  const [currSelection, setCurrSelection] = useState<string>('backdrops')
  return (
    <div className={classes.container}>
      <h1 className={classes.sectionName}>MEDIA</h1>
      <div className={classes.buttonContainer}>
        <ButtonChoiceContainer
        variants={variants}
        setVariant={setCurrSelection}
        currVariant={currSelection}></ButtonChoiceContainer>
      </div>
      <div className={classes.imageContainer}>
        <ImagesList isPoster={currSelection == 'backdrops' ? true : false} 
        imagesLinks={currSelection == 'backdrops' ? backdrops : posters} 
        maxCount={currSelection == 'backdrops' ? 3 : 8}></ImagesList>
      </div>
    </div>
  )
}

export default MediaContainer
