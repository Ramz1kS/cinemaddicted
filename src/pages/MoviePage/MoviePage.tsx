import React, { useEffect } from 'react'
import classes from './MoviePage.module.css'
import UpperMoviePage from './UpperMoviePage'
import LowerMoviePage from './LowerMoviePage'
import NavTabLeft from '../../components/NavTabLeft/NavTabLeft'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
