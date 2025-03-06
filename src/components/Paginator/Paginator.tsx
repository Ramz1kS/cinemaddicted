import React, { FC, useState } from 'react'
import classes from './Paginator.module.css'

interface PaginatorProps {
  pageNum: number;
  setPageNum: (val: number) => void;
  totalPages: number;
}

const Paginator: FC<PaginatorProps> = ({
  pageNum, setPageNum, totalPages
}) => {
  const [inputVal, setInputVal] = useState(1)
  const [errMsg, setErrMsg] = useState("")
  if (totalPages == 1) {
    return (<></>)
  }
  return (
    <div className={classes.paginator}>
      <div className={classes.switchByButtons}>
        <p className={classes.clickMe}
          style={{
            opacity: pageNum == 1 ? 0 : 1,
            cursor: pageNum == 1 ? "default" : "pointer"
          }}
          onClick={() => {
            if (pageNum != 1)
              setPageNum(--pageNum)
          }}>{"prev page"}</p>
        <h3 className={classes.currPage}>page {pageNum}/{totalPages}</h3>
        <p className={classes.clickMe}
          style={{
            opacity: pageNum == totalPages ? 0 : 1,
            cursor: pageNum == totalPages ? "default" : "pointer"
          }}
          onClick={() => {
            if (pageNum != totalPages)
              setPageNum(++pageNum)
          }}>{"next page"}</p>
      </div>
      <div className={classes.switchByInput}>
        <p>
          <span className={classes.clickMe}
            onClick={() => {
              if (inputVal > totalPages || inputVal < 1) {
                setErrMsg("Page number is out of range :(")
              }
              else {
                setErrMsg("")
                setPageNum(inputVal)
              }
            }}
          >jump</span>{" to "}
        </p>
        <input
          className={classes.input}
          value={inputVal}
          min={1}
          max={totalPages}
          onChange={(e) => setInputVal(Number(e.target.value))}
          type='number'></input>
        <p>/{totalPages} page</p>
      </div>
      <h3 className={classes.errorMsg}>{errMsg}</h3>
    </div>
  )
}

export default Paginator
