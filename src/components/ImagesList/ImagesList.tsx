import React, { FC } from 'react'
import classes from './ImagesList.module.css'
import ImageClickable from '../ImageClickable/ImageClickable';
import { ImageTMDB } from '../../../types';
import ViewAllButton from '../MediaContainer/ViewAllButton';

interface ImagesListProps {
  imagesLinks: ImageTMDB[];
  maxCount?: number;
  isPoster: boolean;
}

const ImagesList: FC<ImagesListProps> = ({imagesLinks, maxCount, isPoster}) => {
  const imgLink = isPoster ? `https://media.themoviedb.org/t/p/w1000_and_h563_face/` : `https://media.themoviedb.org/t/p/w440_and_h660_face/`
  const spawnImageLinks = () => {
    if (imagesLinks.length == 0) {
      return <p>There are no images in this category</p> 
    }
    if (!maxCount || imagesLinks.length <= maxCount) {
      return imagesLinks.map((item, index) => 
      <ImageClickable isPoster={isPoster}  key={index}
      imageLink={imgLink + item.file_path}
      externalLink={`https://media.themoviedb.org/t/p/original/${item.file_path}`}></ImageClickable>) 
    } else {
      return imagesLinks.slice(0, maxCount).map((item, index) => 
      <ImageClickable isPoster={isPoster} key={index}
      imageLink={imgLink + item.file_path}
      externalLink={`https://media.themoviedb.org/t/p/original/${item.file_path}`}></ImageClickable>)
    }
  }
  return (
    <>
      {spawnImageLinks()}
      {maxCount && imagesLinks.length > maxCount ? <ViewAllButton images={imagesLinks} isPoster={isPoster}></ViewAllButton> : null }
    </>
  )
}



export default ImagesList


