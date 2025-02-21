import React, { FC } from 'react'
import classes from './ButtonChoiceContainer.module.css'
import { motion } from 'motion/react';

interface ButtonChoiceContainerProps {
  variants: string[];
  currVariant: string;
  setVariant: (val: string) => void
}

const ButtonChoiceContainer: FC<ButtonChoiceContainerProps> = ({variants, currVariant, setVariant}) => {
  return (
    <div className={classes.buttonsContainer}>
      {variants.map((item, index) => 
        <motion.p 
        initial={{fontWeight: 300}}
        animate={{fontWeight: currVariant == item ? 500 : 300}}
        key={index}
        style={{borderBottom: currVariant == item ? "1px solid white" : "none"}}
        onClick={() => setVariant(item)}
        className={classes.button}>{item}</motion.p>)}
    </div>
  )
}

export default ButtonChoiceContainer
