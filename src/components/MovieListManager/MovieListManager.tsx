import React, { useContext, useState } from 'react'
import classes from './MovieListManager.module.css'
import { useServer } from '../../hooks/useServer'
import { BasicAnswer, Film } from '../../../types'
import { authContext } from '../../contexts/AuthContext/AuthContextProvider';

interface MovieListManagerProps {
  favorite: boolean;
  watchlist: boolean;
  movieId: string;
}

const MovieListManager: React.FC<MovieListManagerProps> = ({favorite, watchlist, movieId}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [isWatchlist, setIsWatchlist] = useState(watchlist);
  const userId = useContext(authContext).userId
  const sessionId = useContext(authContext).sessionId
  const { useData } = useServer<BasicAnswer>()
  const handleClick = async (category: string, flag: boolean, stateFunc: () => void) => {
    const url = `https://api.themoviedb.org/3/account/${userId}/${category}?session_id=${sessionId}`;
    //   useData(`https://api.themoviedb.org/3/account/${userId}/${category}`, "POST", {
    //     session_id: sessionId,
    //     "media_type": "movie",
    //     "media_id": movieId,
    //     [category]: flag
    //   }, stateFunc)
    // }


    // Запрос ниже был сгенерен Chat GPT. 
    // Я не знаю, почему, но мой хук useServer и функция оттуда useData просто не работают. Они
    // добавляют фильмы в указанные списки, но не удаляют. Ошибок в хуке я не обнаружил.
    // Может, дело в axios... Я не знаю...
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_READ}`,
        },
        body: JSON.stringify({
          media_type: 'movie',
          media_id: movieId,
          [category]: flag,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        stateFunc();
      } else {
      }
    } catch (error) {
    }
  }
  if (userId == 'none') {
    return (<></>)
  }
  return (
    <div className={classes.buttonContainer}>
      <p
      className={classes.clickMe}
      onClick={() => handleClick('watchlist', !isWatchlist, () => setIsWatchlist((prev) => !prev))}
      >{ !isWatchlist ? "add to wishlist" : "remove from wishlist "}</p>
      <p
      className={classes.clickMe}
      onClick={() => handleClick('favorite', !isFavorite, () => setIsFavorite((prev) => !prev))}
      >{ !isFavorite ? "add to favorites" : "remove from favorites "}</p>
    </div>
  )
}

export default MovieListManager
