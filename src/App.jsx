import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import './App.css'

function App() {

  return (
    <>
      <Header />
      <main className="mx-auto max-w-200 my-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
