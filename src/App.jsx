import React, { useState } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Login from './components/Login';


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  }

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
        {isAuthenticated ? (
          <>
          <Background />
          <Foreground />
          </>) : ( <Login onLoginSuccess={handleLoginSuccess} /> )
        }
      </div>
    </>
  )
}

export default App