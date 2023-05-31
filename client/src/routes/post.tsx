import { useParams } from 'react-router-dom'
import { fetchPost } from '../network/posts_api'
import { useState, useEffect } from 'react'
import { Post } from '../models/post'
import filmPhoto from '../assets/film1.jpg'
import { formatDate } from '../utils/formatData'

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
        <>
            {post && <div className="grid grid-cols-3 gap-16 m-12">
                <div className="p-7 pb-20 bg-white rounded-md shadow-md border border-gray-200 dark:bg-gray-100 dark:border-gray-200 col-span-3 md:col-span-2">
                    <img className="lg relative" src={filmPhoto} alt="" />
                </div>
                <div className='text-lg leading-10 text-slate-700 flex flex-col'>
                    {post.caption && (<p className='border-slate-300 border-b pb-1'>{post.caption}</p>)}
                    <p className='border-slate-300 border-b pb-1'>@user</p>
                    <p className='border-slate-300 border-b pb-1'>{post.updatedAt > post.createdAt ? formatDate(post.updatedAt) : formatDate(post.createdAt)}</p>
                </div>
            </div>
            }</>
    )
}

export default PostPage