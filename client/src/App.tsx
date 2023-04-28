import { useState, useEffect } from 'react'
import './App.css'
import { Post as PostModel } from './models/post'
import axios from 'axios'
import Post from './components/Post'

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
    <div className='App'>
      {posts?.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  )
}

export default App
