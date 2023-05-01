import { Post as PostModel } from "../models/post"
import Post from "./Post"

interface FeedProps {
    posts?: PostModel[]
}

const Feed = ({ posts }: FeedProps) => {

    return (
        <div className='w-100 md:w-2/3 lg:w-1/2 space-y-12 pb-10'>
            {posts?.map((post) => (
                <Post post={post} key={post._id} />
            ))
            }
        </div>
    )
}

export default Feed