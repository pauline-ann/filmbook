import { useState, useEffect } from 'react'
import { Post as PostModel } from './models/post'
import Feed from './components/Feed'
import fetchData from './utils/fetchData'
import Button from './components/Button'
import PlusIcon from './components/icons/PlusIcon'
import Modal from './components/Modal'
import CreatePost from './components/CreatePost'

function App() {
  const [posts, setPosts] = useState<PostModel[]>()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchData('/api/posts')
        setPosts(data)
      }
      catch (error) {
        console.error(error)
        alert(error)
      }
    }
    loadPosts()
  }, [])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Feed posts={posts} />
      <Button isRound onClick={() => setShowModal(true)}>
        <PlusIcon />
      </Button>
      <Modal show={showModal}>
        <CreatePost toggleModal={() => setShowModal(!showModal)} />
      </Modal>
    </div>
  )
}

export default App
