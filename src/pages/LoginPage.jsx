import NavBar from "@/components/NavBar"
import { Link } from "react-router-dom"
import { useState } from "react"
import { toast, Toaster } from "sonner"

function LoginPage(){
  const formFields = [
    { name: "email", label: "Email", type: "email", placeholder: "Email" },
    { name: "password", label: "Password", type: "password", placeholder: "Password" }
  ]

  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })
  const [userValidate, setUserValidate] = useState(true)
  
  function handleChange(e){
    setFormData({...formData, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setUserValidate(false)
    // ถ้า userValidate เป็น false และเป็น desktop (>= 1440px) ให้แสดง toast error
    if (!userValidate && window.innerWidth >= 1440) {
      toast.error("Your password is incorrect or this email doesn't exist", {
        description: "Please try another password or email",
      })
    }
  }

  return(
    <>
      <Toaster position="bottom-right" richColors toastOptions={{ style: { width: "550px", padding: "20px", fontSize: "16px" } }} />
      <NavBar />
      <div className="flex items-center justify-center bg-white px-4 py-10">
        <div className="bg-brown-200 rounded-[16px] w-full py-10 px-4 desktop:w-[calc(800px/1440px*100%)] desktop:px-[120px] desktop:py-[60px]">
          {/* Title */}
          <h1 className="text-headline-2 text-brown-600 text-center mb-8">Log in</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 desktop:gap-6">
            {formFields.map((field) => (
              <div key={field.name}>
                <div className="flex flex-col gap-1">
                  <label className="text-body-1 text-brown-400">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`h-[48px] px-4 bg-white border rounded-[8px] text-body-1 placeholder:text-brown-400 focus:outline-none focus:border-brown-400
                      ${userValidate? "border-brown-300 text-brown-600" : "border-brand-red text-brand-red" }
                      `}
                  
                  />
                </div>
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="h-[48px] mt-3 px-8 bg-brown-600 desktop:w-[141px] text-white text-body-1 rounded-full cursor-pointer transition-colors hover:bg-brown-500"
              >
                Log in
              </button>
            </div>
          </form>

          {/* Sign up Link */}
          <p className="text-body-2 text-brown-400 text-center mt-[35px] desktop:flex desktop:gap-3 justify-center">
            Don't have any account?{" "}
            <Link to="/sign-up" className="text-brown-600 underline underline-offset-2 hover:text-brown-400">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage
