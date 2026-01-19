import { useState } from "react"
import axios from "axios"

const baseUrl = "https://blog-post-project-api.vercel.app/posts"

function useReqData(setPosts) {
  const [postData, setPostData] = useState({
    posts: null,
    currentPage: 1,
    nextPage: null,
    totalPages: 0,
    totalPosts: 0
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(true)

  async function fetchData(params = {}) {
    setIsLoading(true)
    setError(null) 

    try {
      const res = await axios.get(baseUrl, { params })
      
      setPostData({
        posts: res.data.posts,
        currentPage: res.data.currentPage,
        nextPage: res.data.nextPage,
        totalPages: res.data.totalPages,
        totalPosts: res.data.totalPosts
      });

      // append ข้อมูลใหม่ต่อท้าย posts
      if (setPosts) {
        setPosts((prevPosts) => [...prevPosts, ...res.data.posts])
      }

      res.data.currentPage === res.data.totalPages ? setHasMore(false) : setHasMore(true);
    } catch (e) {
      console.log("error =",e)
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return { postData, isLoading, error, fetchData, hasMore, setHasMore }
}

export default useReqData