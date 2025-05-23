import React from 'react'
import { Outlet } from 'react-router' // Importing Outlet for rendering child routes
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import '../styles/reset.scss'
import '../styles/global.scss'

function App() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Placeholder for rendering child routes */}
      <Footer />
    </div>
  )
}

export default App
