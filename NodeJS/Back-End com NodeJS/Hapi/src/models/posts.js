import { Mongoose } from "mongoose";

const schema = new Mongoose.Schema({
    title: String,
    content: String,
    author: String,
    publishDate: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: { createdAt: true, updateAt: true },
    toJson: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret.id
            delete ret._id
        }
    },
    versionKey: false,



})

const PostsModel = Mongoose.mode('Posts', schema)
export default PostsModel