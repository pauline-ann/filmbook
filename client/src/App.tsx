import { useState, useEffect } from 'react'
import { Post as PostModel } from './models/post'
import axios from 'axios'
import Feed from './components/Feed'

function App() {
  const [posts, setPosts] = useState<PostModel[]>()

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await axios({ url: '/api/posts' })
        const posts = await response.data
        setPosts(posts)
      }
      catch (error) {
        console.error(error)
        alert(error)
      }
    }
    loadPosts()
  }, [])

  return (
    <>
      <Feed posts={posts} />
    </>
  )
}

export default App
