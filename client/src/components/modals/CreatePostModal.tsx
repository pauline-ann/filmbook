import { useState } from 'react'
import filmPhoto from '../../assets/film1.jpg'
import LoadingIcon from '../icons/LoadingIcon'
import { createPost } from '../../utils/createPost'

interface CreatePostProps {
    toggleModal: (arg: boolean) => void
}

const CreatePost = ({ toggleModal }: CreatePostProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [caption, setCaption] = useState('')

    const handlePost = async () => {
        setIsLoading(true)

        // create post
        try {
            await createPost({
                caption: caption
            })
        }
        catch (error) {
            console.log(error)
        }

        // close modal
        toggleModal(false)
        setIsLoading(false)
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
                            <button
                                className="absolute top-3 right-2.5 text-gray-700 bg-transparent hover:bg-gray-300 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                onClick={() => toggleModal(false)}
                            >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <form className='space-y-7'>
                                <div className='aspect-w-1 aspect-h-1 bg-gray-100'>
                                    <img className='object-contain' src={filmPhoto} />
                                </div>
                                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-3 focus:outline-none" value={caption} required onChange={e => setCaption(e.target.value)} placeholder='Type caption here...' />
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 rounded-b">
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handlePost()}
                                disabled={isLoading}
                            >
                                {isLoading ? <LoadingIcon /> : 'Post'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default CreatePost