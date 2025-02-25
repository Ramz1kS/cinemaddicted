import React, { FC, useState } from 'react'
import classes from './ReviewsList.module.css'
import ReviewComponent from './ReviewComponent'
import { ReviewData } from '../../../types'

interface ReviewsListProps {
  reviews: ReviewData;
}

const ReviewsList: FC<ReviewsListProps> = ({reviews}) => {
  const [loadCount, setLoadCount] = useState<number>(5)
  return (
    <div className={classes.listContainer}>
      <h3 className={classes.header}>REVIEWS</h3>
      { reviews.results.length == 0 ? 
      <p className={classes.greyText}>Seems like there are no reviews yet...</p> 
      :
      <div className={classes.commentsList}>
        {reviews.results.slice(0, loadCount).map((item) => <ReviewComponent key={item.id} reviewInfo={item}></ReviewComponent>)}
        {loadCount < reviews.results.length ? 
          <button
          className={classes.loadMore}
          onClick={() => setLoadCount((prev) => prev + 5)}>
            <h3>Load more</h3>
          </button> : <></>}
      </div>
      }
    </div>
  )
}

export default ReviewsList
