import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ArticleSection from './components/ArticleSection'


function App() {
  return (
    <>
      <NavBar />
      <div className=''>
        <HeroSection />
        <ArticleSection />
      </div>
      <Footer />
    </>
  );
}

export default App
