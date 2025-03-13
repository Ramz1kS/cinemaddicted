import React from 'react'
import classes from './SearchSettingSort.module.css'
import { motion } from 'motion/react'
import HoverMenu from '../HoverMenu/HoverMenu'
import { SortState } from '../../../types'

interface SearchSettingSortProps {
  sort: SortState,
  setSort: (val: SortState | ((val: SortState) => SortState)) => void
}

const SearchSettingSort: React.FC<SearchSettingSortProps> = ({sort, setSort}) => {
  const variants: {[key: string]: string} = {
    "popularity": "popularity",
    "rating": "vote_average",
    "title": "title",
    "release date": "primary_release_date",
    "revenue": "revenue"
  }
  const handleClickMethod = (val: string) => {
    setSort((prev) => ({
      ...prev,
      new: {
        method: val,
        order: prev.new.order
      }
    }))
  }

  const handleClickOrder = (val: string) => {
    setSort((prev) => ({
      ...prev,
      new: {
        method: prev.new.method,
        order: val
      }
    }))
  }

  return (
    <HoverMenu starNeeded={sort.new.method != sort.old.method || sort.new.order != sort.old.order} name='sort'>
      <div className={classes.sortContainer}>
      { Object.keys(variants).map((item, index) => 
        <motion.p
        className={classes.sortVariant}
        initial={{fontWeight: 400, color: "#878787"}}
        animate={{fontWeight: sort.new.method == variants[item] ? 600 : 300,
          color: sort.new.method == variants[item] ? "#FFFFFF" : "#878787"
        }} 
        onClick={() => handleClickMethod(variants[item])}
        key={index}>{item}
        </motion.p>) }
        <div className={classes.orderSetting}>
          <p>order:</p>
          <motion.p
          className={classes.orderVariant}
          onClick={() => handleClickOrder("desc")}
          initial={{fontWeight: 400, color: "#878787"}}
          animate={{fontWeight: sort.new.order == "desc" ? 600 : 300,
            color: sort.new.order == "desc" ? "#FFFFFF" : "#878787"
          }}>descending</motion.p>
          <motion.p
          className={classes.orderVariant}
          onClick={() => handleClickOrder("asc")}
          initial={{fontWeight: 400, color: "#878787"}}
          animate={{fontWeight: sort.new.order == "asc" ? 600 : 300,
            color: sort.new.order == "asc" ? "#FFFFFF" : "#878787"
          }}>ascending</motion.p>
        </div>
      </div>
    </HoverMenu>
  )
}

export default SearchSettingSort
