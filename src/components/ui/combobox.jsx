import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Combobox({ 
  value, 
  onChange, 
  suggestions = [], 
  placeholder = "Search",
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const inputRef = useRef(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // Filter suggestions based on input value
  useEffect(() => {
    if (value && value.length > 0) {
      const filtered = suggestions.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredSuggestions(filtered)
      setIsOpen(filtered.length > 0)
    } else {
      setFilteredSuggestions([])
      setIsOpen(false)
    }
  }, [value, suggestions])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (item) => {
    onChange(item.title)
    setIsOpen(false)
    navigate(`/posts/${item.id}`)
  }

  return (
    <div className={`relative ${className}`}>
      <input 
        ref={inputRef}
        type="text" 
        placeholder={placeholder}
        className="text-[14.5px] text-black bg-white w-full desktop:w-[360px] h-[48px] rounded-[8px] py-3 pl-4 pr-10 border border-brown-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          if (value && filteredSuggestions.length > 0) {
            setIsOpen(true)
          }
        }}
      />
      <Search className='absolute right-[12px] top-[12px] text-brown-600 pointer-events-none'/>
      
      {/* Dropdown */}
      {isOpen && filteredSuggestions.length > 0 && (
        <div 
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-brown-300 rounded-[8px] shadow-lg z-50 max-h-[300px] overflow-y-auto"
        >
          {filteredSuggestions.map((item) => (
            <div
              key={item.id}
              className="px-4 py-3 text-body-2 text-brown-600 cursor-pointer hover:bg-brown-200 transition-colors border-b border-brown-200 last:border-b-0"
              onClick={() => handleSelect(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export { Combobox }

