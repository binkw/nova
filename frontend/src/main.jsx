import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './screens/Home.jsx'
import Wallet from './screens/Wallet.jsx'
import Swap from './screens/Swap.jsx'
import Security from './screens/Security.jsx'
import Coach from './screens/Coach.jsx'
import './styles.css'

function Layout() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/security" element={<Security />} />
          <Route path="/coach" element={<Coach />} />
        </Routes>
      </div>
      <nav className="bottom-nav">
        <NavLink to="/" end className="nav-btn">Home</NavLink>
        <NavLink to="/wallet" className="nav-btn">Wallet</NavLink>
        <NavLink to="/swap" className="nav-btn">Swap</NavLink>
        <NavLink to="/security" className="nav-btn">Security</NavLink>
        <NavLink to="/coach" className="nav-btn">Coach</NavLink>
      </nav>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
)
