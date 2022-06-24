import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Calendar } from './components/Calendar/Calendar'
import { InputZipCode } from './components/ZipCode/InputZipCode'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Calendar />
        <InputZipCode />
      </>
  )
}

export default App
