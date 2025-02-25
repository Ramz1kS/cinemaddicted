import React, { FC } from 'react'

interface RatingDescriptionProps {
  rating: number;
}

interface RatingDescriptionInfo {
  message: string;
  color: string;
}

const RatingDescription: FC<RatingDescriptionProps> = ({rating}) => {
  const setMessage = (): RatingDescriptionInfo => {
    // TODO: добавить больше цветов, чтобы шло по нарастающей
    switch (rating) {
      case 10:
        return { message: "GODLIKE!!!", color: "#FFFF33" }
      case 9:
        return { message: "Amazing!", color: "#FFFF33" }
      case 8:
        return { message: "Pretty good", color: "#33FF33" }
      case 7:
        return { message: "Good", color: "#33FF33"}
      case 6:
        return { message: "It's alright", color: "#A0A0A0"}
      case 5:
        return { message: "Meh", color: "#A0A0A0"}
      case 4:
        return { message: "Sucked", color: "#A0A0A0"}
      case 3:
        return { message: "Really sucked", color: "#CC6600" }
      case 2:
        return { message: "This is awful", color: "#CC6600" }
      case 1:
        return { message: "poop", color: "#CC6600"}
      default:
        return { message: "Uhhhh...", color: "#A0A0A0"}
    }
  }
  return (
    <p
    style={{color: setMessage().color}}>
      {setMessage().message}
    </p>
  )
}

export default RatingDescription
