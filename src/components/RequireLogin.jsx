import { X } from "lucide-react"
import { Link } from "react-router-dom"

function RequireLogin({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-[450px] relative flex flex-col items-center gap-6">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brown-500 hover:text-brown-600 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-headline-3 text-brown-600 font-semibold text-center pt-4">
          Create an account to continue
        </h2>

        {/* Create Account Button */}
        <Link 
          to="/sign-up"
          className="bg-brown-600 text-white py-4 px-10 rounded-full text-body-1 font-medium hover:bg-brown-500 transition-colors"
        >
          Create account
        </Link>

        {/* Login Link */}
        <p className="text-body-2 text-brown-400">
          Already have an account?{" "}
          <Link to="/login" className="text-brown-600 underline hover:text-brown-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RequireLogin
