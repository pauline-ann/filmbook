import { Post as PostModel } from "../models/post"

interface PostProps {
    post: PostModel
}

const Post = ({ post }: PostProps) => {

    return (
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Post</h3>
            <div className="mt-2">
                <p className="text-sm text-gray-500">{post.caption}</p>
            </div>
        </div>
    )
}

export default Post