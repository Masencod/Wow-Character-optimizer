import { useState,useEffect } from 'react'
import './App.css'
import CharacterEq from './Components/CharEq';
import Input from './Components/Input';



function App() {

  const [charData, setCharData] = useState({})
  
  const handleChange = (data) => {
    setCharData(data)
  }

  return (
    <>
      <Input onSubmit={handleChange}></Input>
      <CharacterEq char={charData}/>
    </>
  )
}

export default App
