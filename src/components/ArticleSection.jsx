import { Search,ChevronDown } from 'lucide-react';


function ArticleSection(){
  return (
    <>
      <div className='desktop:px-[120px] desktop:pb-[120px]'>
        <p className="p-4 text-headline-3 text-brown-600 desktop:pb-8 desktop:pl-0 desktop:pt-0">Latest articles</p>
        <div className="bg-brown-200 p-4 h-[172px] desktop:rounded-[16px] desktop:h-[80px] desktop:flex desktop:items-center desktop:justify-between">
          <div className='hidden desktop:flex desktop:gap-2 desktop:text-body-1 desktop:text-brown-400 '>
            <button className='desktop:w-[113px] desktop:h-[48px] desktop:hover:bg-brown-300 desktop:hover:rounded-[8px] desktop:hover:text-brown-500'>Highlight</button>
            <button className='desktop:w-[70px] desktop:h-[48px] desktop:hover:bg-brown-300 desktop:hover:rounded-[8px] desktop:hover:text-brown-500'>Cat</button>
            <button className='desktop:w-[126px] desktop:h-[48px] desktop:hover:bg-brown-300 desktop:hover:rounded-[8px] desktop:hover:text-brown-500'>Inspiration</button>
            <button className='desktop:w-[105px] desktop:h-[48px] desktop:hover:bg-brown-300 desktop:hover:rounded-[8px] desktop:hover:text-brown-500'>Ganeral</button>
          </div>
          <div className='relative'>
            <input type="text" placeholder="Search" className="text-body-1 text-brown-400 bg-white w-full desktop:w-[360px] h-[48px] rounded-[8px] py-3 pl-4 pr-3 border border-brown-300"/>
            <Search className='absolute right-[12px] top-[12px] text-brown-600'/>
          </div>
          <p className='text-body-1 text-brown-400 pt-4 pb-1 desktop:hidden'>Category</p>
          <div className='relative desktop:hidden'>
            <input type="text" placeholder="Highlight" className="text-body-1 text-brown-400 bg-white w-full h-[48px] rounded-[8px] py-3 pl-4 pr-3 border border-brown-300"/>
            <ChevronDown className='absolute right-[12px] top-[12px] text-brown-600'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleSection