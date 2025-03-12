import React, { FC } from 'react'
import classes from './SimpleNumInput.module.css'

interface SimpleNumInputProps {
  inputVal: number,
  max?: number,
  min?: number,
  setInputVal: (val: number) => void
}

const SimpleNumInput: FC<SimpleNumInputProps> = ({
  inputVal, setInputVal, max, min
}) => {
  return (
    <input
      className={classes.input}
      value={inputVal}
      min={min ? min : -100000}
      max={max ? max : 100000}
      onChange={(e) => setInputVal(Number(e.target.value))}
      type='number'></input>
  )
}

export default SimpleNumInput
