import React, { useState } from 'react'
import classes from './SearchBar.module.css'
import { motion } from 'motion/react'

const SearchBar = () => {
  const [searchBarFocused, setSearchBarFocused] = useState(false)
  const [searchText, setSearchText] = useState('')
  const searchTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.6}}
    className={classes.searchContainer}>
      <motion.input
      initial={{width: 300, scale: 1}}
      animate={{width: searchBarFocused ? 700 : 300, scale: searchBarFocused ? 1.1 : 1}}
      onFocus={() => setSearchBarFocused(true)}
      onBlur={() => setSearchBarFocused(false)}
      transition={{duration: 0.2}}
      placeholder='name or keywords'
      className={classes.searchInput}
      value={searchText}
      onChange={searchTextChangeHandler}
      ></motion.input>
      <div 
      className={classes.searchSettingsContainer}>
        <p>type</p>
        <p>genre</p>
        <p>rating</p>
        <p>time</p>
      </div>
      <button className={classes.searchButton}><h3>search</h3></button>
    </motion.div>
  )
}

export default SearchBar
