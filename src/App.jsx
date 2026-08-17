// Imports hooks and components from node modules
import { useState } from 'react'
import { Outlet } from 'react-router-dom';

// Imports components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import './App.css'

function App() {
  return (
    <>
      <Header />
      {/* Wraps the Outlet that switches the routes in a main tag, and styles it */}
      <main className="mx-auto max-w-200 my-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
