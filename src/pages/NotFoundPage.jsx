import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Link } from "react-router-dom"

function NotFoundPage(){
  return(
    <>
      <div className="min-h-[100vh] flex flex-col">
        <NavBar />
        {/* 404 Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          {/* Exclamation Icon */}
          <div className="w-20 h-20 rounded-full border-[3px] border-brown-600 flex items-center justify-center mb-6 desktop:w-24 desktop:h-24">
            <span className="text-4xl font-bold text-brown-600 desktop:text-5xl">!</span>
          </div>
          
          {/* Title */}
          <h1 className="text-headline-2 text-brown-600 font-bold mb-8 desktop:text-headline-1">
            Page Not Found
          </h1>
          
          {/* Go To Homepage Button */}
          <Link 
            to="/" 
            className="bg-brown-600 text-white px-8 py-4 rounded-full text-body-1 font-medium hover:bg-brown-500 transition-colors duration-200 desktop:px-10 desktop:py-5"
          >
            Go To Homepage
          </Link>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default NotFoundPage