import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import ArticleSection from './components/ArticleSection'
import BlogCard from './components/BlogCard'
import { blogPosts } from './assets/blogPosts'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className='flex flex-col gap-12 pt-6 desktop:px-[120px] desktop:pb-[80px] desktop:grid desktop:grid-cols-2 desktop:gap-2.5'>
      {blogPosts.map((value, index) => (value.category === selectedCategory || selectedCategory === "All")? <BlogCard selectedCategory={selectedCategory} image={value.image} category={value.category} title={value.title} description={value.description} author={value.author} date={value.date} /> : null) }
      </div>
      <Footer />
    </>
  );
}

export default App
