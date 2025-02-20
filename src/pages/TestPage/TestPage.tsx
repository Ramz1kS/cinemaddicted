import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RequestToken, SessionIdData } from '../../../types'
import axios from 'axios'
import classes from './TestPage.module.css'

const TestPage = () => {
  // const { id } = useParams()
  const apiUrl = import.meta.env.VITE_API_READ;
  const [requestToken, setRequestToken] = useState('')
  const [sessionId, setSessionId] = useState('')
  console.log(import.meta.env);
  console.log(apiUrl)

  async function fetchRequestToken(url: string) {
    try {
      let response = await axios.get<RequestToken>(url, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiUrl}`
        }
      })
      setRequestToken(response.data.request_token)
    }
    catch (e) {
      console.error(e)
    }
  }

  async function fetchAnyData(url: string) {
    try {
      let response = await axios.get(url, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiUrl}`
        }
      })
      console.log(response.data)
    }
    catch (e) {
      console.error(e)
    }
  }

  // TODO: переделать под проверку на существование реквест токена эмммм
  async function authenticate(url: string) {
    try {
      console.log(`Current url: ${url}`)
      window.open(url, '_blank')
    }
    catch (e) {
      console.error(e)
    }
  }

  async function getSessionId() {
    try {
      let response = await axios.post<SessionIdData>('https://api.themoviedb.org/3/authentication/session/new', 
      {
        request_token: requestToken,
      },
      {
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${apiUrl}`
        }
      })
      console.log(response.data)
      setSessionId(response.data.session_id)
    }
    catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log('Request token: ', requestToken)
  }, [requestToken])

  return (
    <div className={classes.pageCanvas}>
      <p 
      className={classes.clickableP}
      onClick={() => fetchAnyData('https://api.themoviedb.org/3/authentication')}>Authentication</p>
      <p 
      className={classes.clickableP}
      onClick={() => fetchAnyData('https://api.themoviedb.org/3/movie/12?language=en-US')}>What kind of movie is that bro</p>
      <p 
      className={classes.clickableP}
      onClick={() => fetchRequestToken('https://api.themoviedb.org/3//authentication/token/new')}>Get new request token</p>
      <p 
      className={classes.clickableP}
      onClick={() => authenticate(`https://themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/testing`)}>Authentication</p>
      <p 
      className={classes.clickableP}
      onClick={() => getSessionId()}>Get session token</p>

      <p>Session id: {sessionId}</p>
    </div>
  )
}

export default TestPage
