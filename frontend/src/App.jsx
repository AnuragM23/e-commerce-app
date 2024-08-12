import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <main className='bg-primary text-tertiary'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      
    </main>
  )
}

export default App