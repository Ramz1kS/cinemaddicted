import React, { useState } from 'react'
import classes from './SearchBar.module.css'
import { AnimatePresence, motion } from 'motion/react'
import { DateState, GenreState, SearchParamsType, SortState } from '../../../types';
import SearchSettingTime from '../SearchSettingTime/SearchSettingTime';
import SearchSettingRating from '../SearchSettingRating/SearchSettingRating';
import SearchSettingGenres from '../SearchSettingGenres/SearchSettingGenres';
import SearchSettingSort from '../SearchSettingSort/SearchSettingSort';

interface SearchBarProps {
  setSearchText: (val: string) => void,
  searchText: string;
  setSearchParams: (value: SearchParamsType | ((prevVar: SearchParamsType) => SearchParamsType)) => void;
  setPageNum: (val: number) => void
}

const SearchBar: React.FC<SearchBarProps> = ({setSearchText, searchText, setSearchParams, setPageNum}) => {
  const [searchBarFocused, setSearchBarFocused] = useState(false)
  const [genres, setGenres] = useState<GenreState>({
    new: [],
    old: []
  })
  const [date, setDate] = useState<DateState>({
    old: {
      min: 0,
      max: 0
    },
    new: {
      min: 2000,
      max: 2023
    },
    needed: false
  })
  const [rating, setRating] = useState<DateState>({
    old: {
      min: 0,
      max: 0
    },
    new: {
      min: 1,
      max: 10
    },
    needed: false
  })
  const [sortMethod, setSortMethod] = useState<SortState>({
    old: {
      method: "popularity",
      order: "desc"
    },
    new: {
      method: "popularity",
      order: "desc"
    }
  })
  const form_genres = (selectedGenreIds: number[]) => {
    var result_str = ""
    for (var i = 0; i < selectedGenreIds.length; i++) {
      console.log(selectedGenreIds)
      result_str = result_str + selectedGenreIds[i] + (i != selectedGenreIds.length - 1 ? "|" : "");
    }
    return result_str
  }
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
          sort_by: sortMethod.new.method + "." + sortMethod.new.order,
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
          with_genres: form_genres(genres.new),
          "primary_release_date.gte": date.needed ? (date.new.min + "-01-01") : "",
          "primary_release_date.lte": date.needed ? (date.new.max + "-01-01") : "",
          "vote_average.gte": rating.needed ? rating.new.min : "",
          "vote_average.lte": rating.needed ? rating.new.max : "",
          sort_by: sortMethod.new.method + "." + sortMethod.new.order,
        }
      })
      setGenres((prev) => {
        return {
          old: prev.new,
          new: prev.new
        }
      })
      setDate((prev) => ({
        ...prev,
        old: {
          min: prev.new.min,
          max: prev.new.max
        }
      }))
      setRating((prev) => ({
        ...prev,
        old: {
          min: prev.new.min,
          max: prev.new.max
        }
      }))
    }
    setSortMethod((prev) => ({
      ...prev,
      old: {
        method: prev.new.method,
        order: prev.new.order
      }
    }))
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
      placeholder='name'
      className={classes.searchInput}
      value={searchText}
      onChange={searchTextChangeHandler}
      ></motion.input>
      <AnimatePresence>
      <motion.div 
      initial={{opacity: 1}}
      animate={{opacity: searchText == '' ? 1 : 0}}
      exit={{opacity: 0}}      
      style={{
        opacity: searchText == '' ? 1 : 0,
        pointerEvents: searchText == "" ? "all" : "none",
        cursor: searchText == '' ? 'default' : 'not-allowed'
      }}
      className={classes.searchSettingsContainer}>
        <SearchSettingGenres setSelected={setGenres} selected={genres}></SearchSettingGenres>
        <SearchSettingRating rating={rating} setRating={setRating}></SearchSettingRating>
        <SearchSettingTime date={date} setDate={setDate}></SearchSettingTime>
        <SearchSettingSort sort={sortMethod} setSort={setSortMethod}></SearchSettingSort>
      </motion.div>
      </AnimatePresence>
      <motion.button 
      initial={{scale: 1}}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.9}}
      className={classes.searchButton}
      onClick={handleSearch}
      ><h3>search</h3>
      </motion.button>
    </motion.div>
  )
}

export default SearchBar
