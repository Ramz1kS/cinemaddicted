import React, { FC, useState } from 'react'
import classes from './MultipleChoiceElem.module.css'
import { motion } from 'motion/react';

interface MultipleChoiceElemProps {
  name: string;
  chosenVals: any[];
  setChosenVals: (val: any[] | ((prevVal: any[]) => any[])) => void;
  val: any;
}

const MultipleChoiceElem: FC<MultipleChoiceElemProps> = ({name, chosenVals, setChosenVals, val}) => {
  const handleClick = () => {
    if (chosenVals.includes(val)) {
      setChosenVals((prevVal) => {
        return prevVal.filter((item) => item != val)
      })
    }
    else {
      setChosenVals((prevVal) => [...prevVal, val])
    }
  }
  return (
    <div className={classes.choiceElem}
    onClick={handleClick}>
      <motion.p
      initial={{fontWeight: 300, color: "#878787"}}
      animate={{fontWeight: chosenVals.includes(val) ? 700 : 300,
        color: chosenVals.includes(val) ? "#FFFFFF" : "#878787"
      }}
      transition={{duration: 0.1}}>
        {name.toLowerCase()}
      </motion.p>
    </div>
  )
}

export default MultipleChoiceElem
