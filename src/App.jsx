import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products/Products.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Products/>
    </>
  )
}

export default App
