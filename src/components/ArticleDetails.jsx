import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import axios from "axios"
import { formatDate } from "@/utils/formatDate"
import { Smile, Copy, Facebook, Linkedin, Twitter } from "lucide-react"
import Footer from "./Footer"
import { toast, Toaster } from "sonner"
import RequireLogin from "./RequireLogin"

const categoryColors = {
  Highlight: { text: 'text-brand-green', bg: 'bg-brand-green-soft' },
  Cat: { text: 'text-brand-blue', bg: 'bg-brand-blue-soft' },
  Inspiration: { text: 'text-brand-purple', bg: 'bg-brand-purple-soft' },
  General: { text: 'text-brand-orange', bg: 'bg-brand-orange-soft' }
}

function ArticleDetails() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countLike, setCountLike] = useState(0)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const params = useParams()

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      setError(null)
      try {
        const res = await axios.get("https://blog-post-project-api.vercel.app/posts", {
          params: { limit: 1, page: params.postId }
        })
        setData(res.data.posts[0])
        setCountLike(res.data.posts[0].likes)
      } catch (e) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [params.postId])

  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>
  }

  if (error) {
    return <p className="text-center text-red-600 py-10">Error: {error.message}</p>
  }

  if (!data) {
    return <p className="text-center py-10">No post found</p>
  }

  async function copyTextToClipboard(textToCopy) {
    try {
        await navigator.clipboard.writeText(textToCopy);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
  }


  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="flex flex-col items-center desktop:items-start desktop:px-[120px] desktop:pt-[60px] desktop:pb-[120px] desktop:gap-[48px] desktop:relative desktop:bg-gradient-to-b from-white to-[#f9f8f6]">
        <img src={data.image} className="object-cover w-[375px] h-[184px] desktop:w-full desktop:h-[587px] desktop:rounded-[16px]"/>
        
        <div className="desktop:flex desktop:flex-row desktop:justify-between desktop:w-full">
          {/* Left Column - Content */}
          <div className="flex flex-col pt-[24px] px-[16px] pb-[40px] gap-6 desktop:px-0 desktop:py-0 desktop:gap-[48px] desktop:w-[815px] desktop:justify-between">
            {/* Category + Date + Title */}
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex items-center gap-4">
                <span className={`py-1 px-3 text-body-2 rounded-full ${categoryColors[data.category]?.text} ${categoryColors[data.category]?.bg}`}>
                  {data.category}
                </span>
                <span className="text-body-2 text-brown-400">{formatDate(data.date)}</span>
              </div>
              <h1 className="text-headline-3 text-brown-600 font-semibold desktop:text-headline-2">{data.title}</h1>
            </div>

            {/* Content */}
            <div className="text-body-1 text-brown-500">
              <span>{data.description}</span>
              <div className="markdown">
                <ReactMarkdown>{data.content || "No content"}</ReactMarkdown>
              </div>  
            </div>

            {/* Author Card - Mobile Only */}
            <div className="bg-brown-200 rounded-[16px] p-6 flex flex-col gap-4 desktop:hidden">
              <div className="flex items-center gap-4">
                <img 
                  src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" 
                  alt={data.author} 
                  className="w-[44px] h-[44px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-between">
                  <span className="text-body-3 text-brown-400">Author</span>
                  <span className="text-headline-4 text-brown-600 font-semibold">{data.author}</span>
                </div>
              </div>
              <hr className="border-brown-300" />
              <p className="text-body-1 text-brown-400 italic">
                I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
                <br /><br />
                When i'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
              </p>
            </div>

            {/* Like & Share Section */}
            <div className="bg-brown-200 w-full flex flex-col gap-6 p-[16px] desktop:flex-row desktop:justify-between desktop:px-6 desktop:rounded-[16px]">
              {/* Like Counter */}
              <div 
                className="flex items-center justify-center gap-2 border bg-white border-brown-400 rounded-full py-3 px-6 group cursor-pointer hover:bg-brown-200 transition-colors"
                onClick={() => setShowLoginModal(true)}
              >
                <Smile className="w-5 h-5 text-brown-500" />
                <span className="text-body-1 text-brown-600">{countLike || 321}</span>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <button 
                  className="flex items-center justify-center w-[161px] gap-2 border bg-white border-brown-400 rounded-full py-3 px-4 text-body-2 cursor-pointer text-brown-600 hover:bg-brown-200 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(`http://localhost:5173/posts/${params.postId}`)
                    toast.success("Copied!", { description: "This article has been copied to your clipboard." })
                  }}
                >
                  <Copy className="w-4 h-4" />
                  Copy link
                </button>
                <button 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                  onClick={() => {
                    navigator.clipboard.writeText(`https://www.facebook.com/share.php?u=${encodeURIComponent(`http://localhost:5173/posts/${params.postId}`)}`)
                    toast.success("Copied!", { description: "Facebook share link copied to clipboard." })
                  }}
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                  onClick={() => {
                    navigator.clipboard.writeText(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`http://localhost:5173/posts/${params.postId}`)}`)
                    toast.success("Copied!", { description: "LinkedIn share link copied to clipboard." })
                  }}
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
                  onClick={() => {
                    navigator.clipboard.writeText(`https://www.twitter.com/share?url=${encodeURIComponent(`http://localhost:5173/posts/${params.postId}`)}`)
                    toast.success("Copied!", { description: "Twitter share link copied to clipboard." })
                  }}
                >
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Comment Form */}
            <div className="pt-6 px-4 pb-10 desktop:p-0">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-body-1 text-brown-500">Comment</label>
                <textarea 
                  placeholder="What are your thoughts?"
                  className="w-full h-[100px] p-3 border bg-white border-brown-300 rounded-[8px] text-body-2 text-brown-600 placeholder:text-brown-400 resize-none focus:outline-none focus:border-brown-400"
                />
                <div className="desktop:flex desktop:justify-end">
                  <button className="w-[121px] h-[48px] bg-brown-600 text-white py-3 px-6 rounded-full text-body-2 hover:bg-brown-500 transition-colors">
                    Send
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="flex flex-col gap-4 w-full pt-8 desktop:gap-10">
                {/* Comment 1 */}
                <div className="flex flex-col gap-3 pb-4 border-b border-brown-300 desktop:gap-6 desktop:pb-10">
                  <div className="flex items-center gap-3">
                    <img src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col justify-between">
                      <span className="text-headline-4 text-brown-500 font-semibold">Jacob Lash</span>
                      <span className="text-body-3 text-brown-400">12 September 2024 at 18:30</span>
                    </div>
                  </div>
                  <p className="text-body-1 text-brown-400">
                    I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.
                  </p>
                </div>

                {/* Comment 2 */}
                <div className="flex flex-col gap-3 pb-4 border-b border-brown-300 desktop:gap-6 desktop:pb-10">
                  <div className="flex items-center gap-3">
                    <img src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col justify-between">
                      <span className="text-headline-4 text-brown-500 font-semibold">Ahri</span>
                      <span className="text-body-3 text-brown-400">12 September 2024 at 18:30</span>
                    </div>
                  </div>
                  <p className="text-body-1 text-brown-400">
                    Such a great read! I've always wondered why my cat slow blinks at me—now I know it's her way of showing trust!
                  </p>
                </div>

                {/* Comment 3 */}
                <div className="flex flex-col gap-3 pb-4 desktop:gap-6 desktop:pb-0">
                  <div className="flex items-center gap-3">
                    <img src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col justify-between">
                      <span className="text-headline-4 text-brown-500 font-semibold">Mimi mama</span>
                      <span className="text-body-3 text-brown-400">12 September 2024 at 18:30</span>
                    </div>
                  </div>
                  <p className="text-body-1 text-brown-400">
                    This article perfectly captures why cats make such amazing pets. I had no idea their purring could help with healing. Fascinating stuff!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Author Card Sticky (Desktop Only) */}
          <div className="hidden desktop:block desktop:w-[305px]">
            <div className="bg-brown-200 rounded-[16px] p-6 flex flex-col gap-4 sticky top-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" 
                  alt={data.author} 
                  className="w-[44px] h-[44px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-between">
                  <span className="text-body-3 text-brown-400">Author</span>
                  <span className="text-headline-4 text-brown-600 font-semibold">{data.author}</span>
                </div>
              </div>
              <hr className="border-brown-300" />
              <p className="text-body-1 text-brown-400 italic">
                I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
                <br /><br />
                When i'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <RequireLogin 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  )
}

export default ArticleDetails

