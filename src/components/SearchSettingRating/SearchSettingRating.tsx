import React, { FC, useState } from 'react'
import classes from './SearchSettingRating.module.css'
import SimpleNumInput from '../SimpleNumInput/SimpleNumInput'
import HoverMenu from '../HoverMenu/HoverMenu'

interface SearchSettingRatingProps {

}

const SearchSettingRating: FC<SearchSettingRatingProps> = () => {
  const [year, setYear] = useState(2000)
  return (
    <HoverMenu name='rating'>
      <div className={classes.ratingMenu}>
        <p>Input a year...</p>
        <div className={classes.doubleSidedRange}>
        <input type='range' className={classes.firstDoubleRange} min={0} max={10}></input>
        <input type='range' min={0} max={10} className={classes.secondDoubleRange}></input>
        </div>
        <p className={classes.applySetting}>apply</p>
      </div>
    </HoverMenu>
  )
}

export default SearchSettingRating
