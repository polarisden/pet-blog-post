import { Linkedin, Github, Mail } from "lucide-react";

function Footer(){
  return (
    <>
      <div className="bg-brown-200 h-[152px] flex flex-col justify-center items-center gap-6 desktop:flex-row desktop:justify-between desktop:px-[120px] desktop:py-[60px]">
        <div className="flex gap-6">
          <span className="text-brown-500 text-body-1 ">Get in touch</span>
          <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-brown-600">
            <Linkedin className="w-4 h-4 "/>
          </div>
          <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-brown-600">
            <Github className="w-4 h-4 "/>
          </div>
          <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-brown-600">
            <Mail className="w-4 h-4 "/>
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