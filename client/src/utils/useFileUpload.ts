import { useState } from "react"

type PreviewImageType = {
    file: File
    url: string
}

const useFileUpload = () => {

    const [processing, setProcessing] = useState(false)
    const [progress, setProgress] = useState(0)
    const [previewImage, setPreviewImage] = useState<PreviewImageType>()

    // create url for selected image, so an image preview can be shown
    const handlePreviewImage = async (files: FileList | undefined) => {
        if (!files || files.length == 0) {
            setPreviewImage(undefined)
            return
        }

        const file = files[0]

        const objectUrl = URL.createObjectURL(file)
        setPreviewImage({
            file,
            url: objectUrl
        })
    }

    return {
        progress,
        previewImage,
        processing,
        actions: {
            setPreviewImage,
            handlePreviewImage,
            // uploadFile,
            // deleteFile
        }
    }
}

export default useFileUpload