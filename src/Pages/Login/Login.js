import React from 'react'
import { loginUrl } from '../../Backend/Spotify'
import "../Login/Login.css"

const Login = () => {
  return (
    <div className='login'>

       <img src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png" alt='' />
                <a href={loginUrl}>LOGIN WITH SPOTIFY </a>

        </div>
  )
}

export default Login