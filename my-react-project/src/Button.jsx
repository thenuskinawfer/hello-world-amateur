import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button variant='outlined'>This is a button</Button>
    </>
  )
}

export default App
