import { InferSchemaType, model, Schema } from "mongoose"

const postSchema = new Schema({
    // TODO: photo
    caption: { type: String, required: false },
}, { timestamps: true })

type Post = InferSchemaType<typeof postSchema>

export default model<Post>("Photo", postSchema)