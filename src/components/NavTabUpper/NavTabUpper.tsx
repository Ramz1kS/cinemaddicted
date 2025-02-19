import React, { FC } from 'react'
import classes from './NavTabUpper.module.css'
import NavTabLeft from '../NavTabLeft/NavTabLeft';

interface NavTabUpperProps {
  name: string;
}

const NavTabUpper: FC<NavTabUpperProps> = ({name}) => {
  return (
    <>
    <div className={classes.tab}>
      <h3 className={classes.name}>{name}</h3>
    </div>
    <NavTabLeft></NavTabLeft>
    </>
  )
}

export default NavTabUpper
