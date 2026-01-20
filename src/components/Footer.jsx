import { Link } from "react-router-dom"
import linkedinIcon from "@/assets/LinkedIN_black.svg"
import githubIcon from "@/assets/Github_black.svg"
import googleIcon from "@/assets/Google_black.svg"

function Footer(){
  return (
    <>
      <div className="bg-brown-200 h-[152px] flex flex-col justify-center items-center gap-6 desktop:border-t-[0px] border-white desktop:flex-row desktop:justify-between desktop:px-[120px] desktop:py-[60px]">
        <div className="flex gap-6">
          <span className="text-brown-500 text-body-1 ">Get in touch</span>
          <div className="flex justify-center items-center gap-4">
            <a href="https://example.com">
              <img src={linkedinIcon} alt="LinkedIn" className="hover:scale-140"/>
            </a>
            <a href="https://github.com/polarisden">
              <img src={githubIcon} alt="Github" className="hover:scale-140"/>
            </a>
            <a href="mailto:dinsor1545@gmail.com">
              <img src={googleIcon} alt="Google" className="hover:scale-140"/>
            </a>
          </div>
        </div>
        <div>
          <Link to="/" className="underline underline-offset-2 text-brown-600 text-body-1 hover:text-brown-400 transition-colors">
            Home page
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer