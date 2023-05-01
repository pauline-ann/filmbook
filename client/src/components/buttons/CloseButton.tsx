import CloseIcon from '../icons/CloseIcon'

interface TinyButtonProps {
    onClose: () => void
}

const TinyButton = ({ onClose }: TinyButtonProps) => {

    return (
        <button
            className="absolute top-3 right-2.5 text-gray-700 bg-transparent hover:bg-gray-300 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
        >
            <CloseIcon />
        </button>
    )
}

export default TinyButton