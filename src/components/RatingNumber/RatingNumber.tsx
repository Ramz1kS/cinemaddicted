import React, { FC } from 'react'

interface RatingNumberProps {
  number: number;
}

const RatingNumber: FC<RatingNumberProps> = ({number}) => {
  const setColor = () => {
    if (number >= 9)
      return "#FFFF33"
    else if (number >= 7)
      return "#33FF33"
    else if (number >= 4)
      return "#A0A0A0"
    else 
      return "#CC6600"
  }
  return (
    <span 
    style={{color: setColor()}}>
      {number}
    </span>
  )
}

export default RatingNumber
