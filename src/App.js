
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { getTokenFromUrl } from './Backend/Spotify';
import Login from './Pages/Login/Login';

const spotify = new SpotifyWebApi();

function App() {


const [token , setToken ] = useState(null);

  useEffect(()=> {
    const hash  = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;


    if(_token){

        setToken(_token);
        spotify.setAccessToken(_token); 

        spotify.getMe().then( (user) => {
          console.log("I have the token", user);
        });
    }
    console.log("i have a token ", token);
  }, []); 
  return (
    <div className="app">
        {
          token ? (
            <h1> i am in</h1>
          ):(
        <Login/>
          )
        }
    </div>
  );
}

export default App;
