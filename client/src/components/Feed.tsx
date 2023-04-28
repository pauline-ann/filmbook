import { Post as PostModel } from "../models/post"
import Post from "./Post"

interface FeedProps {
    posts?: PostModel[]
}

const Feed = ({ posts }: FeedProps) => {

    return (
        <>
            {posts?.map((post) => (
                <Post post={post} key={post._id} />
            ))
            }
        </>
    )
}

export default Feed