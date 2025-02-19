import React from 'react'
import classes from './MoviePage.module.css'
import TestBackgroundImage from '../../assets/images/test/moviepageback.png'
import MoviePoster from '../../assets/images/test/movieposter.png'
import UpperMoviePage from './UpperMoviePage'
import LowerMoviePage from './LowerMoviePage'
import NavTabLeft from '../../components/NavTabLeft/NavTabLeft'

const MoviePage = () => {
  return (
    <>
      <UpperMoviePage></UpperMoviePage>
      <LowerMoviePage></LowerMoviePage>
      <NavTabLeft></NavTabLeft>
    </>
  )
}

export default MoviePage
