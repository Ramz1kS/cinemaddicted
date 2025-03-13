import React, { FC, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import classes from './HoverMenu.module.css'

interface HoverMenuProps {
  name: string,
  children: React.ReactNode,
  starNeeded: boolean
}

const HoverMenu: FC<HoverMenuProps> = ({
  name, children, starNeeded
}) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className={classes.hoverMenuContainer}>
      <p className={classes.menuSummoner} 
      style={{width: name.length + "ch",
      }}
      onMouseOver={() => setIsClicked(true)}
      onMouseOut={() => setIsClicked(false)}>{name + (starNeeded ? "*" : " ")}</p>
      <div
      onMouseOver={() => setIsClicked(true)}
      onMouseOut={() => setIsClicked(false)}>
        <AnimatePresence>
        { isClicked ? <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
          {children}
        </motion.div> : null}
        </AnimatePresence>
      </div>
    </div>
  )
}


export default HoverMenu
