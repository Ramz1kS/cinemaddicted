import React, { useState } from 'react'
import classes from './TempSearchPage.module.css'
import NamedField from '../../components/NamedField/NamedField'
import { useNavigate } from 'react-router-dom'
import NavTabLeft from '../../components/NavTabLeft/NavTabLeft'

const TempSearchPage = () => {
  const navigate = useNavigate()
  const [inputVal, setInputVal] = useState(107)
  return (
    <div className={classes.tempSearchCanvas}>
      <NavTabLeft></NavTabLeft>
      <h3>Enter a movie id here</h3>
      <input className={classes.idInput}
      value={inputVal}
      onChange={(e) => setInputVal(Number(e.target.value))}></input>
      <p className={classes.clickMe}
      onClick={() => navigate(`/movie/${inputVal}`)}
      >search</p>

      <div className={classes.examples}>
        <p>examples:</p>
        <p>Snatch: 107</p>
        <p>Lock, Stock and Two Smoking Barrels: 100</p>
        <p>Crank: 1948</p>
        <p>The Dark Knight: 155</p>
      </div>
    </div>
  )
}

export default TempSearchPage
