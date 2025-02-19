import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartingPage from './pages/StartingPage/StartingPage'
import MoviePage from './pages/MoviePage/MoviePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import MoviesListPage from './pages/MoviesListPage/MoviesListPage'
import DontExistPage from './pages/DontExistPage/DontExistPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage></StartingPage>}></Route>
        <Route path='/list/' element={<MoviesListPage></MoviesListPage>}></Route>
        <Route path='/movie/' element={<MoviePage></MoviePage>}></Route>
        <Route path='/register/' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/login/' element={<LoginPage></LoginPage>}></Route>
        <Route path='*' element={<DontExistPage></DontExistPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
