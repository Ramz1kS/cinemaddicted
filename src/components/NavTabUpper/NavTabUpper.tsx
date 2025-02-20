import React, { FC } from 'react'
import classes from './NavTabUpper.module.css'
import NavTabLeft from '../NavTabLeft/NavTabLeft';

interface NavTabUpperProps {
  name: string;
  children?: React.ReactNode
}

const NavTabUpper: FC<NavTabUpperProps> = ({name, children}) => {
  return (
    <>
    <div className={classes.tab}>
      <h3 className={classes.name}>{name}</h3>
      <div className={classes.buttons}>
        {children}
      </div>
    </div>
    <NavTabLeft></NavTabLeft>
    </>
  )
}

export default NavTabUpper
