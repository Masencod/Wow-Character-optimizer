import { useState } from 'react'
import './App.css'
import CharacterEq from './Components/CharEq';
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer EUR1iJkE6C9VJPAEAamM35owruJERZfoz1");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const charName = 'heidson'
const realm = 'ravencrest'
// let Eq = fetch(`https://eu.api.blizzard.com/profile/wow/character/${realm}/${charName}/equipment?namespace=profile-eu&locale=en_US&access_token=EU8xX5qx5zUSj0Mm9vwlIYeB1vMVh4vIBx`, requestOptions)
// .then(response => response.json())
// .then(data => data['equipped_items'][0]['slot']['name'])
// .then(data => {
//   return data
// })
// .catch(error => console.log('error', error));

function App() {

  return (
    <>
      <CharacterEq realm={realm} charName={charName}/>
    </>
  )
}

export default App
