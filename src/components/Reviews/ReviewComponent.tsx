import React, { FC } from 'react'
import SealPic from '../../assets/images/ActorPlaceholder.png'
import classes from './ReviewComponent.module.css'
import { Review } from '../../../types'
import RatingNumber from '../RatingNumber/RatingNumber';
import { getRandomInRange } from '../../hooks/useRandom';

interface ReviewProps {
  reviewInfo: Review;
}

const ReviewComponent: FC<ReviewProps> = ({reviewInfo}) => {
  const getRandomColor = () => {
    const colors = [
      "#FFB6C1",
      "#ADD8E6",
      "#98FB98",
      "#FFD700",
      "#FFA07A",
      "#E6E6FA",
      "#F0E68C",
      "#FF69B4",
      "#7CFC00",
      "#FF4500"
    ];
    return colors[getRandomInRange(0, colors.length - 1)]
  }
  return (
    <div className={classes.commentContainer}>
      { reviewInfo.author_details.avatar_path ? 
      <div 
      className={classes.avatar}
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/w100_and_h100_face/${reviewInfo.author_details.avatar_path})`}}></div>
      :
      <div
      style={{backgroundColor: getRandomColor()}}
      className={classes.avatarNoPic}>
        <h2>{reviewInfo.author[0]}</h2>  
      </div>}
      <div className={classes.commentText}>
        <h3>{reviewInfo.author}</h3>
        { reviewInfo.author_details.rating ? <h4>rated as <RatingNumber number={Number(reviewInfo.author_details.rating)}></RatingNumber>/10</h4> : <h4>didn't rate it</h4> }
        <p className={classes.greyText}>{reviewInfo.content}</p>
      </div>
    </div>
  )
}

export default ReviewComponent
