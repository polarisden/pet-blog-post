import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

function NavBar(){
  return (
    <>
      <div className="flex justify-between py-3 px-6 h-12 desktop:h-20 bg-brown-100 border-b border-brown-300 desktop:py-[16px] desktop:px-[120px]">
        <img src="src\assets\logo.svg" className="w-6 h-6 desktop:w-11 desktop:h-11"/>
        
        {/* Mobile Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="desktop:hidden">
            <button className="w-6 h-6">
              <img src="src\assets\navbar-menu.svg" className="w-6 h-6" alt="Menu"/>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[375px] p-6" align="end">
            <div className="flex flex-col gap-5">
              <Button 
                variant="outline" 
                className="w-full h-[48px] rounded-[999px] border-brown-400 text-brown-600 bg-white hover:bg-gray-50"
              >
                Log in
              </Button>
              <Button 
                className="w-full h-[48px] rounded-[999px] bg-brown-600 text-white hover:bg-brown-700"
              >
                Sign up
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Buttons */}
        <div className="gap-2 hidden desktop:flex">
          <button className="desktop:h-[48px] desktop:w-[127px] desktop:border desktop:rounded-[999px] desktop:border-brown-400 desktop:text-body-1 desktop:text-brown-600">Log in</button>
          <button className="desktop:h-[48px] desktop:w-[141px] desktop:rounded-[999px] desktop:bg-brown-600 desktop:text-body-1 desktop:text-white">Sign up</button>
        </div> 
      </div>
    </>
  )
}

export default NavBar