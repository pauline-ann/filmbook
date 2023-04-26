import { InferSchemaType, model, Schema } from "mongoose"

const postSchema = new Schema({
    // TODO
    fileName: { type: String, required: false },
    file: {
        data: Buffer,
        contentType: String
    },
    caption: { type: String, required: false },
}, { timestamps: true })

type Post = InferSchemaType<typeof postSchema>

export default model<Post>("Photo", postSchema)