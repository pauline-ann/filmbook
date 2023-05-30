import filmPhoto from '../assets/film1.jpg'
import { useParams } from 'react-router-dom'
import { fetchPost } from '../network/posts_api'
import { useState, useEffect } from 'react'
import { Post } from '../models/post'

const PostPage = () => {
    const [post, setPost] = useState<Post>()
    const { postId } = useParams()

    const getPost = async (postId: string) => {
        const post = await fetchPost(postId)
        setPost(post)
    }

    useEffect(() => {
        if (postId) {
            getPost(postId)
        }
    }, [postId])

    return (
        <div className="p-7 bg-white rounded-md shadow-md border border-gray-200 dark:bg-gray-100 dark:border-gray-200 flex flex-col">
            <div className="relative">
                <img className="lg" src={filmPhoto} alt="" />
                <div className="p-5 flex flex-col flex-items justify-between">
                    <p className="font-normal text-gray-900 mb-3 dark:text-gray-400">{post?.caption}</p>
                    <div className="flex justify-between">
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">@user</p>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{post?.updatedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage