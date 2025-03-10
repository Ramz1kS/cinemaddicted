import React, { useState } from 'react'
import classes from './SearchBar.module.css'
import { motion } from 'motion/react'
import { SearchParamsType } from '../../../types';

interface SearchBarProps {
  setSearchText: (val: string) => void,
  searchText: string;
  setSearchParams: (value: SearchParamsType | ((prevVar: SearchParamsType) => SearchParamsType)) => void;
  setPageNum: (val: number) => void
}

const SearchBar: React.FC<SearchBarProps> = ({setSearchText, searchText, setSearchParams, setPageNum}) => {
  const [searchBarFocused, setSearchBarFocused] = useState(false)
  const searchTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (searchText != '') {
      setPageNum(1)
      setSearchParams({
        mainLink: 'https://api.themoviedb.org/3/search/movie',
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          sort_by: 'popularity.desc',
          query: searchText
        }
      })
    } else {
      setPageNum(1)
      setSearchParams({
        mainLink: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          sort_by: 'popularity.desc',
          query: searchText
        }
      })
    }
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
      style={{
        opacity: searchText == '' ? 1 : 0.4,
        cursor: searchText == '' ? 'default' : 'not-allowed'
      }}
      className={classes.searchSettingsContainer}>
        <p>type</p>
        <p>genre</p>
        <p>rating</p>
        <p>time</p>
      </div>
      <button className={classes.searchButton}
      onClick={handleSearch}
      ><h3>search</h3>
      </button>
    </motion.div>
  )
}

export default SearchBar
