import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartingPage from './pages/StartingPage/StartingPage'
import MoviePage from './pages/MoviePage/MoviePage'
import MoviesListPage from './pages/MoviesListPage/MoviesListPage'
import DontExistPage from './pages/DontExistPage/DontExistPage'
import TestPage from './pages/TestPage/TestPage'
import SuggestTMDBPage from './pages/ConnectTMDBPage/SuggestTMDBPage'
import AuthContextProvider from './contexts/AuthContext/AuthContextProvider'
import SuccessfulTMDBPage from './pages/ConnectTMDBPage/SuccessfulTMDBPage'
import MyAccount from './pages/MyAccount/MyAccount'
import TempSearchPage from './pages/TempSearchPage/TempSearchPage'
import DataContextProvider from './contexts/DataContext/DataContextProvider'

function App() {
  return (
    <DataContextProvider>
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage></StartingPage>}></Route>
        <Route path='/list/' element={<MoviesListPage></MoviesListPage>}></Route>
        <Route path='/movie/:movieId' element={<MoviePage></MoviePage>}></Route>
        <Route path='/gototmdb/' element={<SuggestTMDBPage></SuggestTMDBPage>}></Route>
        <Route path='/successtmdb/' element={<SuccessfulTMDBPage></SuccessfulTMDBPage>}></Route>
        <Route path='/account/' element={<MyAccount></MyAccount>}></Route>
        <Route path='/testing/' element={<TestPage></TestPage>}></Route>
        <Route path='/tempsearch/' element={<TempSearchPage></TempSearchPage>}></Route>
        <Route path='*' element={<DontExistPage></DontExistPage>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
    </DataContextProvider>
  )
}

export default App
