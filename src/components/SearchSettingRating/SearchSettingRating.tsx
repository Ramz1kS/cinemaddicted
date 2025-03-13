import React, { FC, useState } from 'react'
import classes from './SearchSettingRating.module.css'
import SimpleNumInput from '../SimpleNumInput/SimpleNumInput'
import HoverMenu from '../HoverMenu/HoverMenu'
import { RatingSearchState } from '../../../types'

interface SearchSettingRatingProps {
  rating: RatingSearchState,
  setRating: (val: RatingSearchState | ((prev: RatingSearchState) => RatingSearchState)) => void
}

const SearchSettingRating: FC<SearchSettingRatingProps> = ({rating, setRating}) => {
  const [minVal, setMinVal] = useState(rating.new.min)
  const [maxVal, setMaxVal] = useState(rating.new.max)
  
  const [errMsg, setErrMsg] = useState("")

  const applyHandle = () => {
    if (maxVal < minVal) {
      setErrMsg("Minimal rating can't be bigger than maximum :(")
    } else if (maxVal < 0 || minVal < 0 || maxVal > 10 || minVal > 10) {
      setErrMsg("Nope.")
    } else {
      setRating((prev) => ({
        ...prev,
        new: {
          min: minVal,
          max: maxVal
        },
        needed: true
      }))
      setErrMsg("")
    }
  }

  const ignoreHandle = () => {
    setRating((prev) => {return {
      ...prev,
      needed: false
    }})
  }
  
  return (
    <HoverMenu starNeeded={!(rating.new.max == rating.old.max && rating.old.min == rating.new.min) && rating.needed} name='rating'>
      <div className={classes.ratingMenu}>
        <p>Minimal rating:</p>
        <SimpleNumInput inputVal={minVal} min={0} max={10} setInputVal={setMinVal}></SimpleNumInput>
        <p>Maximum rating:</p>
        <SimpleNumInput inputVal={maxVal} min={0} max={10} setInputVal={setMaxVal}></SimpleNumInput>
        <p 
        onClick={applyHandle}
        className={classes.clickMe}>apply</p>
        <p 
        onClick={ignoreHandle}
        className={classes.clickMe}>ignore</p>
        <h4>{ !rating.needed ? "(ignored)" : ""}</h4>
        <p className={classes.errMsg}>{errMsg}</p>
      </div>
    </HoverMenu>
  )
}

export default SearchSettingRating
