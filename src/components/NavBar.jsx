import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import logoSvg from "@/assets/logo.svg"
import menuSvg from "@/assets/navbar-menu.svg"
import { useNavigate } from "react-router-dom"

function NavBar(){
  const navigate = useNavigate()

  return (
    <>
      <div className="flex justify-between py-3 px-6 h-12 desktop:h-20 bg-brown-100 border-b border-brown-300 desktop:py-[16px] desktop:px-[120px] cursor-pointer">
        <img src={logoSvg} className="w-6 h-6 desktop:w-11 desktop:h-11" alt="Logo" onClick={() => navigate('/')}/>
        
        {/* Mobile Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="desktop:hidden">
            <button className="w-6 h-6">
              <img src={menuSvg} className="w-6 h-6" alt="Menu"/>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[375px] p-6" align="end">
            <div className="flex flex-col gap-5">
              <Button 
                variant="outline" 
                className="w-full h-[48px] rounded-[999px] border-brown-400 text-brown-600 bg-white hover:bg-gray-50"
                onClick={() => navigate('/login')}
              >
                Log in
              </Button>
              <Button 
                className="w-full h-[48px] rounded-[999px] bg-brown-600 text-white hover:bg-brown-700"
                onClick={() => navigate('/sign-up')}
              >
                Sign up
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Buttons */}
        <div className="gap-2 hidden desktop:flex">
          <button 
            className="desktop:h-[48px] desktop:w-[127px] desktop:border desktop:rounded-[999px] desktop:border-brown-400 desktop:text-body-1 desktop:text-brown-600 desktop:cursor-pointer desktop:transition-all desktop:duration-200 desktop:hover:bg-brown-300 desktop:hover:border-brown-500"
            onClick={() => navigate('/login')}
          >Log in</button>
          <button 
            className="desktop:h-[48px] desktop:w-[141px] desktop:rounded-[999px] desktop:bg-brown-600 desktop:text-body-1 desktop:text-white desktop:cursor-pointer desktop:transition-all desktop:duration-200 desktop:hover:bg-brown-400"
            onClick={() => navigate('/sign-up')}
          >Sign up</button>
        </div> 
      </div>
    </>
  )
}

export default NavBar