import React from 'react'

export const getRandomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

