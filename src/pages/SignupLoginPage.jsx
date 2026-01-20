import NavBar from "@/components/NavBar"
import { useState } from "react"
import { Link } from "react-router-dom"

function SignupLoginPage(){
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return(
    <>
      <NavBar />
      <div className="flex items-center justify-center bg-white px-4 py-10 ">
        <div className="bg-brown-200 rounded-[16px] w-full py-10 px-4 desktop:w-[calc(800px/1440px*100%)] desktop:px-[120px] desktop:py-[60px]">
          {/* Title */}
          <h1 className="text-headline-2 text-brown-600 text-center mb-8">Sign up</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 desktop:gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-body-1 text-brown-400">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="h-[48px] px-4 bg-white border border-brown-300 rounded-[8px] text-body-1 text-brown-600 placeholder:text-brown-400 focus:outline-none focus:border-brown-400"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col gap-1">
              <label className="text-body-1 text-brown-400">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="h-[48px] px-4 bg-white border border-brown-300 rounded-[8px] text-body-1 text-brown-600 placeholder:text-brown-400 focus:outline-none focus:border-brown-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-body-1 text-brown-400">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="h-[48px] px-4 bg-white border border-brown-300 rounded-[8px] text-body-1 text-brown-600 placeholder:text-brown-400 focus:outline-none focus:border-brown-400"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-body-1 text-brown-400">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="h-[48px] px-4 bg-white border border-brown-300 rounded-[8px] text-body-1 text-brown-600 placeholder:text-brown-400 focus:outline-none focus:border-brown-400"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="h-[48px] mt-4 bg-brown-600 desktop:w-[141px] text-white text-body-1 rounded-full cursor-pointer transition-colors hover:bg-brown-500"
              >
                Sign up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-body-2 text-brown-400 text-center mt-[50px] desktop:flex desktop:gap-3 justify-center">
            Already have an account?{" "}
            <Link to="/login" className="text-brown-600 underline underline-offset-2 hover:text-brown-400">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignupLoginPage