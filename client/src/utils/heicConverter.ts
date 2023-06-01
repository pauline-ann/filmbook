import convert from 'heic-convert'

// convert buffers from heic to jpeg
const convertBuffer = async (inputBuffer: Buffer) => {
    const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 1
    })

    return outputBuffer
}

// converts .jeic file to jpeg blob
export const heicToJpeg = async (file: File) => {
    const abuffer = await file.arrayBuffer()
    const buffer = Buffer.from(abuffer)
    const jpgBuffer = await convertBuffer(buffer)
    const blob = new Blob([jpgBuffer], { type: 'image/jpeg' })

    return blob
}