export const authEndpoint = "http://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "a5aa38cf04024b8d97371310277d07f8";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location.hash 
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
            //#accesstoken = mysupersecrectkey&name=manish&
         var parts = item.split('=');  

         initial[parts[0]] =decodeURI(parts[1]);

         return initial;
    },{});

}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirectUri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
