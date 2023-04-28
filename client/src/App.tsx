import { useState, useEffect } from 'react'
import './App.css'
import { Post } from './models/post'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState<Post[]>()

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
    <h1 className="text-4xl font-bold underline">
      {JSON.stringify(posts)}
    </h1>
  )
}

export default App
