import { useState } from 'react'
import './App.css'
import { Student } from './page/Student'
import Child from './page/Child'
//Both Parent to Child pass props and Child to Parent Communication 
function App() {
  const [count, setCount] = useState(0)
  const inc = () => {
    setCount(count + 1)
  }
  return (
    <>
      <Student />
      <Child iCount={inc} count={count}/>
    </>
  )
}

export default App
