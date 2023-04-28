export interface Post {
    _id: string,
    fileName?: string,
    file?: {
        data: Buffer,
        contentType: string
    },
    caption?: string,
    createdAt: string,
    updatedAt: string,
}