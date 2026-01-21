import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import * as React from "react"
import BlogCard from './BlogCard'
import useReqData from '@/hooks/useReqData';
import { formatDate } from '@/utils/formatDate';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Combobox } from "@/components/ui/combobox"

export function SelectDemo({ selectedCategory, setSelectedCategory, onCategoryChange }) {
  return (
    <Select
      value={selectedCategory}
      onValueChange={(value) => {
        setSelectedCategory(value)
        if (onCategoryChange) {
          onCategoryChange(value)
        }
      }}
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

function ArticleSection(){
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const { postData ,isLoading, error, fetchData, hasMore, setHasMore } = useReqData(setPosts)

  // filter data based on search term
  const filteredPostData = posts.filter((item) => {
    const searchLower = search.toLowerCase()
    const matchesSearch = !search || 
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.author.toLowerCase().includes(searchLower)
    return matchesSearch
  }) 

  const handleCategoryChange = (newCategory) => {
    if (newCategory !== selectedCategory) {
      setPosts([])
      setPage(1)
      setHasMore(true)
      setSelectedCategory(newCategory)
    }
  }

  useEffect(() => {
    const formatCategory = selectedCategory === "All" ? "" : selectedCategory
    fetchData({ page: page, category: formatCategory })
  }, [page, selectedCategory])

  return (
    <>
      {/* search bar */}
      <div className='desktop:px-[120px] desktop:pb-[48px]'>
        <p className="p-4 text-headline-3 text-brown-600 desktop:pb-8 desktop:pl-0 desktop:pt-0">Latest articles</p>
        <div className="bg-brown-200 p-4 h-[172px] desktop:rounded-[16px] desktop:h-[80px] desktop:flex desktop:items-center desktop:justify-between">
          
          {/* categories buttone */}
          <div className='hidden desktop:flex desktop:gap-2 desktop:text-body-1 desktop:text-brown-400'>
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
                  onClick={() => {
                    setSelectedCategory(value)
                    handleCategoryChange(value)
                  }}
                  disabled={isSelected} 
                >{value}</button>
              )
            })}
          </div>

          {/* search */}
          <Combobox
            value={search}
            onChange={setSearch}
            suggestions={posts}
            placeholder="Search"
          />
          <p className='text-body-1 text-brown-400 pt-4 pb-1 desktop:hidden'>Category</p>
          <SelectDemo
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>

      {/* blog posts */}
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-12 pt-6 desktop:w-[1440px] desktop:px-[120px] desktop:pb-[60px] desktop:grid desktop:grid-cols-2 desktop:gap-2.5'>
          {error && <p className="text-center text-red-600">Error loading posts: {error.message}</p>}
          {filteredPostData.map((value, index) => (
            <BlogCard 
              key={value.id}
              postId={value.id}
              selectedCategory={selectedCategory} 
              image={value.image} 
              category={value.category} 
              title={value.title} 
              description={value.description} 
              author={value.author} 
              date={formatDate(value.date)} 
            />
          ))}
        </div>
        {hasMore && !search && filteredPostData.length > 0 && (
          <button 
            className='text-body-1 underline underline-offset-2 text-brown-600 py-6 cursor-pointer active:text-brown-400 desktop:pb-[80px] desktop:pt-0 desktop:hover:text-brown-400 transition-colors'
            onClick={() => setPage(page + 1)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "View more"}
          </button>
        )}
      </div>
    </>
  )
}

export default ArticleSection