function NavBar(){
  return (
    <>
      <div className="flex justify-between py-3 px-6 h-12 desktop:h-20 bg-brown-100 border-b border-brown-300 desktop:py-[16px] desktop:px-[120px]">
        <img src="src\assets\logo.svg" className="w-6 h-6 desktop:w-11 desktop:h-11"/>
        <img src="src\assets\navbar-menu.svg" className="w-6 h-6 desktop:hidden"/>
        <div className="gap-2 hidden desktop:flex">
          <button className="desktop:h-[48px] desktop:w-[127px] desktop:border desktop:rounded-[999px] desktop:border-brown-400 desktop:text-body-1 desktop:text-brown-600">Log in</button>
          <button className="desktop:h-[48px] desktop:w-[141px] desktop:rounded-[999px] desktop:bg-brown-600 desktop:text-body-1 desktop:text-brown-600 desktop:text-white">Sign up</button>
        </div> 
      </div>
    </>
  )
}

export default NavBar