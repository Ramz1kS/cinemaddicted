import React from 'react'
import classes from './ActorsList.module.css'
import ActorImage from '../../assets/images/test/actor.png'
import ActorContainer from './ActorContainer'

const ActorsList = () => {
  const actors = [
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
    {
      name: "Jason Statham",
      image: ActorImage
    }, 
  ]
  return (
    <div className={classes.actorsListContainer}>
      <h1 className={classes.sectionName}>CAST</h1>
      <div className={classes.actorsList}>
        {actors.map((item, index) => <ActorContainer key={index} name={item.name} image={item.image}></ActorContainer>)}
      </div>
    </div>
  )
}

export default ActorsList
