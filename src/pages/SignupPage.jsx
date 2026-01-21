import NavBar from "@/components/NavBar"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import validateSignup from "@/utils/validateSignup"
import { Check } from "lucide-react"

function SignupPage(){
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })
  const [errorData, setErrorData] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)
  const navigate = useNavigate()

  const formFields = [
    { name: "name", label: "Name", type: "text", placeholder: "Full name" },
    { name: "username", label: "Username", type: "text", placeholder: "Username" },
    { name: "email", label: "Email", type: "email", placeholder: "Email" },
    { name: "password", label: "Password", type: "password", placeholder: "Password" }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorData({})
    console.log("Form submitted:", formData)
    const errors = validateSignup(formData)
    setErrorData(errors)
    
    // ถ้าไม่มี error ให้แสดง success modal
    if (Object.keys(errors).length === 0) {
      setShowSuccess(true)
    }
  }

  console.log("answer =",errorData)
  return(
    <>
      <NavBar />
      <div className="flex items-center justify-center bg-white px-4 py-10 ">
        
        {!showSuccess? 
        <div className="bg-brown-200 rounded-[16px] w-full py-10 px-4 desktop:w-[calc(800px/1440px*100%)] desktop:px-[120px] desktop:py-[60px]">
          {/* Title */}
          <h1 className="text-headline-2 text-brown-600 text-center mb-8">Sign up</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 desktop:gap-5">
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
                    className={`h-[48px] px-4 bg-white border rounded-[8px] text-body-1 placeholder:text-brown-400 focus:outline-none focus:border-brown-400}
                      ${errorData[field.name] ? "border-brand-red text-brand-red" : "border-brown-300 text-brown-600" }
                      `}
                  />
                </div>
                <div className="text-brand-red text-body-3 pt-1">
                  {errorData[field.name] ? errorData[field.name] : null}
                </div>
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="h-[48px] w-[calc(141/375*100%)] mt-4 bg-brown-600 desktop:w-[141px] text-white text-body-1 rounded-full cursor-pointer transition-colors hover:bg-brown-500"
              >
                Sign up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-body-2 text-brown-400 text-center mt-[35px] desktop:flex desktop:gap-3 justify-center">
            Already have an account?{" "}
            <Link to="/login" className="text-brown-600 underline underline-offset-2 hover:text-brown-400">
              Log in
            </Link>
          </p>
        </div>
        :

        // Success page
        <div className="bg-brown-200 rounded-[16px] w-[375px] py-10 px-4 desktop:w-[calc(800px/1440px*100%)] desktop:px-[120px] desktop:py-[60px] flex flex-col items-center gap-10">
          {/* Green Check Icon */}
          <div className="w-15 h-15 desktop:w-20 desktop:h-20 bg-brand-green rounded-full flex items-center justify-center">
            <Check className="w-9 h-9 desktop:w-12 desktop:h-12 text-white stroke-3" />
          </div>
          
          {/* Title */}
          <h2 className="text-headline-3 desktop:text-headline-2 text-brown-600 font-semibold text-center">
            Registration success
          </h2>
          
          {/* Continue Button */}
          <button
            onClick={() => navigate("/")}
            className="w-[154px] bg-brown-600 text-white py-3 px-8 rounded-full text-body-1 font-medium hover:bg-brown-500 transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
        }
      </div>

    </>
  )
}

export default SignupPage