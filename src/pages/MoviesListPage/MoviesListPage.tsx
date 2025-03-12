import React, { useEffect, useState } from 'react'
import classes from './MoviesListPage.module.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import NavTabUpper from '../../components/NavTabUpper/NavTabUpper'
import { useServer } from '../../hooks/useServer'
import { FilmsArrayData } from '../../../types'
import LoadingPage from '../LoadingPage/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import { SearchParamsType } from '../../../types'

const MoviesListPage = () => {
  const { isLoading, isError, data, useData, errorReason } = useServer<FilmsArrayData>()
  const [pageNum, setPageNum] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [searchParams, setSearchParams] = useState<SearchParamsType>({
    mainLink: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      sort_by: 'popularity.desc'
    },
  })
  useEffect(() => {
    useData(searchParams.mainLink, 
      'GET', 
      {
        page: pageNum,
        ...searchParams.params
      })
  }, [searchParams, pageNum])
    return (
    <div className={classes.pageCanvas}>
      <NavTabUpper name='search'></NavTabUpper>
      <SearchBar searchText={searchText} setSearchText={setSearchText} setSearchParams={setSearchParams} setPageNum={setPageNum}>
      </SearchBar>
      { isLoading ? (<LoadingPage isPage={false}></LoadingPage>) : 
        isError ? (<ErrorPage isPage={false} message={errorReason}></ErrorPage>) : 
        data ? data.results.length != 0 ?
        <MovieList setPageNum={setPageNum} pageNum={pageNum} data={data.results} totalPages={data.total_pages}></MovieList> 
        : <h3>There are no movies that fit your criterias</h3> : <ErrorPage isPage={false}></ErrorPage>
      }
    </div>
  )
}

export default MoviesListPage
