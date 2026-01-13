import { Search,ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import * as React from "react"
import BlogCard from './BlogCard'
import { blogPosts } from '../assets/blogPosts'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = ["All","Highlight", "Cat", "Inspiration", "General"];

const categoryColors = {
  Highlight: {
    text: 'bg-brand-green',
    bg: 'text-brand-green-soft'
  },
  Cat: {
    text: 'bg-brand-blue',
    bg: 'text-brand-blue-soft'
  },
  Inspiration: {
    text: 'bg-brand-purple',
    bg: 'text-brand-purple-soft'
  },
  General: {
    text: 'bg-brand-orange',
    bg: 'text-brand-orange-soft'
  },
  All: {
    text: "text-brown-500",
    bg: "bg-[#a0a0a0]"
  }
}

export function SelectDemo({ selectedCategory, setSelectedCategory }) {
  return (
    <Select
      value={selectedCategory}
      onValueChange={(value) => setSelectedCategory(value)}
    >
      <SelectTrigger className="!text-body-1 !text-brown-400 bg-white w-full !h-[48px] rounded-[8px]  pl-4 pr-3 border border-brown-300 desktop:hidden">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={4}>
        <SelectGroup>
          {categories.map((value,index) => (
            <SelectItem
              key={index}
              value={value}
              className={`cursor-pointer rounded-[8px] shadow ${(value === selectedCategory) ? 'bg-[#a0a0a0] text-brown-500' : ''}`}
            >
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


function ArticleSection(){
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    const filtered = blogPosts.filter((post) => {
      // กรองตาม category
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      
      // กรองตาม search term (ค้นหาใน title, description, author)
      const searchLower = search.toLowerCase()
      const matchesSearch = !search || 
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.author.toLowerCase().includes(searchLower)
      
      return matchesCategory && matchesSearch
    })
    
    setFilteredPosts(filtered)
  }, [search, selectedCategory])

  return (
    <>
      {/* search bar */}
      <div className='desktop:px-[120px] desktop:pb-[48px]'>
        <p className="p-4 text-headline-3 text-brown-600 desktop:pb-8 desktop:pl-0 desktop:pt-0">Latest articles</p>
        <div className="bg-brown-200 p-4 h-[172px] desktop:rounded-[16px] desktop:h-[80px] desktop:flex desktop:items-center desktop:justify-between">
          <div className='hidden desktop:flex desktop:gap-2 desktop:text-body-1 desktop:text-brown-400 '>
            {categories.map((value,index) => {
              const isSelected = value === selectedCategory
              return (
                <button 
                  key={index}
                  className={`desktop:w-fit desktop:h-[48px] desktop:px-4.5 rounded-[8px] shadow-md transition-colors ${
                    isSelected 
                      ? `${categoryColors[selectedCategory]?.text} ${categoryColors[selectedCategory]?.bg} cursor-default` 
                      : 'cursor-pointer desktop:hover:rounded-[8px] desktop:hover:text-brown-500 desktop:hover:bg-brown-300'
                  }`}
                  onClick={() => setSelectedCategory(value)}
                  disabled={isSelected} 
                >{value}</button>
              )
            })}
          </div>
          <div className='relative'>
            <input 
              type="text" 
              placeholder="Search" 
              className="text-[14.5px] text-black bg-white w-full desktop:w-[360px] h-[48px] rounded-[8px] py-3 pl-4 pr-3 border border-brown-300 cursor-pointer-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className='absolute right-[12px] top-[12px] text-brown-600'/>
          </div>
          <p className='text-body-1 text-brown-400 pt-4 pb-1 desktop:hidden'>Category</p>
          <SelectDemo
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>

      {/* blog posts */}
      <div className='flex flex-col gap-12 pt-6 desktop:px-[120px] desktop:pb-[80px] desktop:grid desktop:grid-cols-2 desktop:gap-2.5'>
        {filteredPosts.map((value, index) => (
          <BlogCard 
            key={index} 
            selectedCategory={selectedCategory} 
            image={value.image} 
            category={value.category} 
            title={value.title} 
            description={value.description} 
            author={value.author} 
            date={value.date} 
          />
        ))}
      </div>
    </>
  )
}

export default ArticleSection