import { Post as PostModel } from "../models/post"
import Post from "./Post"

interface FeedProps {
    posts?: PostModel[]
}

const Feed = ({ posts }: FeedProps) => {

    return (
        <div className='w-1/2 space-y-12'>
            {posts?.map((post) => (
                <Post post={post} key={post._id} />
            ))
            }
        </div>
    )
}

export default Feed