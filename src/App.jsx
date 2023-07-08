import { useState,useEffect } from 'react'
import './App.css'
import CharacterEq from './Components/CharEq';
import Input from './Components/Input';
import Wlogs from './Components/Wlogs';
import Test from './Components/Test';


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [charData, setCharData] = useState({})

  const handleIsLoading = () => {
    setIsLoading(!isLoading)
  }
  const handleChange = (data) => {
    setCharData(data)
  }

  return (
    <>
      <Input onSubmit={handleChange} isLoading={isLoading} setIsLoading={handleIsLoading}></Input>
      {/* <Test/> */}
      <CharacterEq isLoading={handleIsLoading} char={charData}/>
    </>
  )
}

export default App
