import { Post as PostModel } from "../models/post"
import FeedPost from "./FeedPost"
import { Link } from "react-router-dom"

interface FeedProps {
    posts?: PostModel[]
}

const Feed = ({ posts }: FeedProps) => {

    return (
        <div className='w-100 md:w-2/3 lg:w-1/2 space-y-12 pb-10'>
            {posts?.map((post) => (
                <Link to={`username/${post._id}`} className="flex">
                    <FeedPost post={post} key={post._id} />
                </Link>
            ))
            }
        </div>
    )
}

export default Feed