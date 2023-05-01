import { useState, useEffect } from 'react'
import { Post as PostModel } from './models/post'
import Feed from './components/Feed'
import { fetchPosts } from './network/fetchPosts'
import Button from './components/Button'
import PlusIcon from './components/icons/PlusIcon'
import Modal from './components/modals/Modal'
import CreatePostModal from './components/modals/CreatePostModal'

function App() {
  const [posts, setPosts] = useState<PostModel[]>()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function loadPosts() {
      try {
        const posts = await fetchPosts()
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
    <div className='w-screen h-screen flex flex-col items-center mt-10 p-10'>
      <h1 className='text-5xl m-20'>filmbook</h1>
      <Feed posts={posts} />
      <Button className='fixed bottom-0 right-0 m-8' isRound width='60px' onClick={() => setShowModal(true)}>
        <PlusIcon />
      </Button>
      {showModal &&
        <Modal>
          <CreatePostModal onClose={() => setShowModal(false)} />
        </Modal>
      }
    </div>
  )
}

export default App
