import React, { createContext, useEffect, useState } from 'react'
import { Genre, GenreResponse } from '../../../types'
import { useServer } from '../../hooks/useServer'

interface dataContextType {
  movie_genres: GenreResponse | null,
  tv_genres: GenreResponse | null
}

export const dataContext = createContext<dataContextType>({
    movie_genres: {genres: []},
    tv_genres: {genres: []}
  }
)

interface DataContextProviderProps {
  children: React.ReactNode
}

const DataContextProvider: React.FC<DataContextProviderProps> = ({children}) => {
  const {isLoading: isLoadingMovies, isError: isErrorMovies, data: movie_genres, useData: useDataMovies} = useServer<GenreResponse>()
  const {isLoading: isLoadingTV, isError: isErrorTV, data: tv_genres, useData: useDataTV} = useServer<GenreResponse>()
  useEffect(() => {
    useDataMovies('https://api.themoviedb.org/3/genre/movie/list?language=en', 'GET', {})
    useDataTV('https://api.themoviedb.org/3/genre/tv/list?language=en', 'GET', {})
  }, [])
  return (
      <dataContext.Provider value={{movie_genres, tv_genres}}>
        {children}
      </dataContext.Provider>
    )
}

export default DataContextProvider
