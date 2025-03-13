import React, { FC, useState } from 'react'
import classes from './SearchSettingTime.module.css'
import SimpleNumInput from '../SimpleNumInput/SimpleNumInput'
import HoverMenu from '../HoverMenu/HoverMenu'
import { DateState } from '../../../types'

interface SearchSettingTimeProps {
  date: DateState,
  setDate: (val: DateState | ((prev: DateState) => DateState)) => void
}

const SearchSettingTime: FC<SearchSettingTimeProps> = ({date, setDate}) => {
  const [minVal, setMinVal] = useState(date.new.min)
  const [maxVal, setMaxVal] = useState(date.new.max)
  
  const [errMsg, setErrMsg] = useState("")

  const applyHandle = () => {
    if (maxVal < minVal) {
      setErrMsg("Minimal year can't be bigger than maximum :(")
    } else if (maxVal < 0 || minVal < 0) {
      // они и в 1900-ых их не делали... энивей
      setErrMsg("Did they even make movies back then?")
    } else {
      setDate((prev) => ({
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
    setDate((prev) => {return {
      ...prev,
      needed: false
    }})
  }
  
  return (
    <HoverMenu starNeeded={!(date.new.max == date.old.max && date.old.min == date.new.min) && date.needed} name='time'>
      <div className={classes.timeMenu}>
        <p>Minimal year:</p>
        <SimpleNumInput inputVal={minVal} setInputVal={setMinVal}></SimpleNumInput>
        <p>Maximum year:</p>
        <SimpleNumInput inputVal={maxVal} setInputVal={setMaxVal}></SimpleNumInput>
        <p 
        onClick={applyHandle}
        className={classes.clickMe}>apply</p>
        <p 
        onClick={ignoreHandle}
        className={classes.clickMe}>ignore</p>
        <h4>{ !date.needed ? "(ignored)" : ""}</h4>
        <p className={classes.errMsg}>{errMsg}</p>
      </div>
    </HoverMenu>
  )
}

export default SearchSettingTime
