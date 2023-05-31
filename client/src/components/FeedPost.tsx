import { Post as PostModel } from "../models/post"
import filmPhoto from '../assets/film1.jpg'
import { formatDate } from "../utils/formatData"

interface PostProps {
    post: PostModel
}

const FeedPost = ({ post }: PostProps) => {
    const {
        caption,
        updatedAt,
        createdAt
    } = post

    const dateText = updatedAt > createdAt ? formatDate(updatedAt) : formatDate(createdAt)

    return (
        <div className="p-7 bg-white rounded-md shadow-md border border-gray-200 dark:bg-gray-100 dark:border-gray-200 flex flex-col">
            <div className="relative">
                <img className="lg" src={filmPhoto} alt="" />
                <div className="p-5 flex flex-col flex-items justify-between">
                    <p className="font-normal text-gray-900 mb-3 dark:text-gray-400">{caption}</p>
                    <div className="flex justify-between">
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">@user</p>
                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{dateText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedPost