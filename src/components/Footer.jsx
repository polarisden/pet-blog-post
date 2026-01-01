import { Linkedin, Github, Mail } from "lucide-react";

function Footer(){
  return (
    <>
      <div className="bg-brown-200 h-[152px] flex flex-col justify-center items-center gap-6 border-t-[30px] desktop:border-t-[0px] border-white desktop:flex-row desktop:justify-between desktop:px-[120px] desktop:py-[60px]">
        <div className="flex gap-6">
          <span className="text-brown-500 text-body-1 ">Get in touch</span>
          <div className="flex justify-center items-center gap-4">
            <a href="https://example.com">
              <img src="src\assets\LinkedIN_black.svg" alt="LinkedIn" className="hover:scale-140"/>
            </a>
            <a href="https://github.com/polarisden">
              <img src="src\assets\Github_black.svg"  alt="Github" className="hover:scale-140"/>
            </a>
            <a href="mailto:dinsor1545@gmail.com">
              <img src="src\assets\Google_black.svg"  alt="Google" className="hover:scale-140"/>
            </a>
          </div>
        </div>
        <div>
          <span className="underline underline-offset-2 text-brown-600 text-body-1">Home page</span>
        </div>
      </div>
    </>
  )
}

export default Footer