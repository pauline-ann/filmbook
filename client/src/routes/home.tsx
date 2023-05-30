import { useState, useEffect } from 'react'
import Feed from '../components/Feed'
import { fetchPosts } from '../network/posts_api'
import Button from '../components/buttons/Button'
import PlusIcon from '../components/icons/PlusIcon'
import Modal from '../components/modals/Modal'
import CreatePostModal from '../components/modals/CreatePostModal'
import { Post as PostModel } from '../models/post'

const Home = () => {
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
        <>
            <Feed posts={posts} />
            <Button className='fixed bottom-0 right-0 m-8' isRound width='60px' onClick={() => setShowModal(true)}>
                <PlusIcon />
            </Button>
            {showModal &&
                <Modal>
                    <CreatePostModal onClose={() => setShowModal(false)} onPostSaved={(newPost) => setPosts([newPost, ...posts as any[]])} />
                </Modal>
            }
        </>
    )
}

export default Home