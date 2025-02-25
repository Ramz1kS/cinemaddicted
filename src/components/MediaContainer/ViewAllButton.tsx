import React, { FC, useState } from 'react'
import classes from './ViewAllButton.module.css'
import AllMediaList from '../AllMediaList/AllMediaList'
import { ImageTMDB } from '../../../types'

interface ViewAllButtonProps {
  images: ImageTMDB[];
  isPoster: boolean;
}

const ViewAllButton: FC<ViewAllButtonProps> = ({images, isPoster}) => {
  const [isListNeeded, setIsListNeeded] = useState(false)
  return (
    <>
    <div className={classes.container}
    onClick={() => setIsListNeeded(true)}>
      <p>click here to</p>
      <p>see the rest</p>
    </div>
    <AllMediaList images={images} isPoster={isPoster}
    isNeeded={isListNeeded} setIsNeeded={setIsListNeeded}></AllMediaList>
    </>
  )
}

export default ViewAllButton
