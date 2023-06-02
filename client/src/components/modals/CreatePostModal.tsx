import LoadingIcon from '../icons/LoadingIcon'
import { PostInput, createPost } from '../../network/posts_api'
import { Post } from '../../models/post'
import { useForm } from 'react-hook-form'
import CloseButton from '../buttons/CloseButton'
import PlusIcon from '../icons/PlusIcon'
import useFileUpload from '../../utils/useFileUpload'

interface CreatePostModalProps {
    onClose: () => void,
    onPostSaved: (post: Post) => void
}

const CreatePostModal = ({ onClose, onPostSaved }: CreatePostModalProps) => {
    // TODO formState: {errors}
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<PostInput>()
    const {
        previewImage,
        actions: { handlePreviewImage, setPreviewImage }
    } = useFileUpload()

    const onSubmit = async (input: PostInput) => {

        // create post
        try {
            const postResponse = await createPost(input)
            onPostSaved(postResponse)
        }
        catch (error) {
            console.error(error)
            alert(error)
        }

        // close modal
        handlePreviewImage(undefined)
        onClose()
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 rounded-t">
                            <h3 className="text-2xl font-semibold">
                                Create new post
                            </h3>
                            <CloseButton onClose={onClose} />
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <form className='space-y-7' id="createPostForm" onSubmit={handleSubmit(onSubmit)}>
                                <div className='aspect-w-1 aspect-h-1 bg-gray-100 cursor-pointer mb-8'>

                                    {previewImage && (
                                        <img
                                            alt=""
                                            className='object-contain'
                                            src={previewImage?.url}
                                        />
                                    )}
                                    {!previewImage && (
                                        <div className='align-middle text-slate-800 text-lg m-auto w-full'>
                                            <PlusIcon inline /> Upload Photo
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        name='file'
                                        multiple={false}
                                        className='opacity-0 h-full w-full'
                                        onChange={(e) => handlePreviewImage(e.target.files || undefined)}
                                        accept='.png, .jpg., .jpeg, .heic'
                                    />
                                </div>
                                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-3 focus:outline-none" rows={2} placeholder='Type caption here...' {...register("caption")} />
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 rounded-b">
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                form="createPostForm"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <LoadingIcon /> : 'Post'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default CreatePostModal