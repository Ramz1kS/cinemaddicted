import React, { FC, useContext, useEffect, useState } from 'react'
import classes from './SearchSettingGenres.module.css'
import { dataContext } from '../../contexts/DataContext/DataContextProvider'
import { AnimatePresence, motion } from 'motion/react'
import HoverMenu from '../HoverMenu/HoverMenu'
import MultipleChoiceElem from '../MultipleChoiceElem/MultipleChoiceElem'
import { GenreState } from '../../../types'

interface SearchSettingGenresProps {
  selected: GenreState,
  setSelected: (val: GenreState | ((prevVal: GenreState) => GenreState)) => void;
}

const SearchSettingGenres: FC<SearchSettingGenresProps> = ({
  selected, setSelected
}) => {
  const movieGenres = useContext(dataContext).movie_genres
  const updateNewGenres = (newGenres: number[] | ((prev: number[]) => number[])) => {
    setSelected((prev) => ({
      ...prev,
      new: typeof newGenres === "function" ? newGenres(prev.new) : newGenres
    }));
  };
  const arrsNotEqual = () => {
    if (selected.new.length != selected.old.length) 
      return true 
    for (var i = 0; i < selected.old.length; i++) {
      if (!selected.new.includes(selected.old[i]))
        return true
    }
    return false;
  }
  
  return (
    <HoverMenu name='genres' starNeeded={arrsNotEqual()}>
      <div className={classes.genresMenu}>
          { movieGenres ? movieGenres.genres.map((item) => 
          <MultipleChoiceElem key={item.id} chosenVals={selected.new} setChosenVals={updateNewGenres} name={item.name} val={item.id}></MultipleChoiceElem>)
          : <div>loading...</div>}
        {/* <p className={classes.applySetting}
        onClick={() => setSelected(selectedIdsCurr)}>apply</p> */}
      </div>
    </HoverMenu>
  )
}

export default SearchSettingGenres
