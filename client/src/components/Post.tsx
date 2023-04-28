import { Post as PostModel } from "../models/post"
import filmPhoto from '../assets/film1.jpg'
import { formatDate } from "../utils/formatData"

interface PostProps {
    post: PostModel
}

const Post = ({ post }: PostProps) => {
    const {
        caption,
        updatedAt,
        createdAt
    } = post

    const dateText = updatedAt > createdAt ? formatDate(updatedAt) : formatDate(createdAt)

    return (
        <>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-100 dark:border-gray-200">
                <img className="rounded-t-lg" src={filmPhoto} alt="" />
                <div className="p-5">
                    <p className="font-normal text-gray-900 mb-3 dark:text-gray-400">{caption}</p>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">@user</p>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{dateText}</p>
                </div>
            </div>
        </>
    )
}

export default Post