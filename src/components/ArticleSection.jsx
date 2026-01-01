import { Search,ChevronDown } from 'lucide-react';

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = ["Highlight", "Cat", "Inspiration", "General"];

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="!text-body-1 !text-brown-400 bg-white w-full !h-[48px] rounded-[8px]  pl-4 pr-3 border border-brown-300 desktop:hidden">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={4}>
        <SelectGroup>
          {categories.map((value,index) => <SelectItem value={value}>{value}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}



function ArticleSection(){
  return (
    <>
      <div className='desktop:px-[120px] desktop:pb-[48px]'>
        <p className="p-4 text-headline-3 text-brown-600 desktop:pb-8 desktop:pl-0 desktop:pt-0">Latest articles</p>
        <div className="bg-brown-200 p-4 h-[172px] desktop:rounded-[16px] desktop:h-[80px] desktop:flex desktop:items-center desktop:justify-between">
          <div className='hidden desktop:flex desktop:gap-2 desktop:text-body-1 desktop:text-brown-400 '>
            {categories.map((value,index) => <button className='desktop:w-fit desktop:h-[48px] desktop:px-4.5 desktop:hover:bg-brown-300 desktop:hover:rounded-[8px] desktop:hover:text-brown-500'>{value}</button>)}
          </div>
          <div className='relative'>
            <input type="text" placeholder="Search" className="text-[14.5px] text-black bg-white w-full desktop:w-[360px] h-[48px] rounded-[8px] py-3 pl-4 pr-3 border border-brown-300"/>
            <Search className='absolute right-[12px] top-[12px] text-brown-600'/>
          </div>
          <p className='text-body-1 text-brown-400 pt-4 pb-1 desktop:hidden'>Category</p>
          <SelectDemo />
          {/* <div className='relative desktop:hidden'>
            <input type="text" placeholder="Highlight" className="text-body-1 text-brown-400 bg-white w-full h-[48px] rounded-[8px] py-3 pl-4 pr-3 border border-brown-300"/>
            <ChevronDown className='absolute right-[12px] top-[12px] text-brown-600'/>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ArticleSection