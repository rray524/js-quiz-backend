import mongoose, { Schema } from "mongoose";

// RESULT MODELS

const resultModels = new Schema({
    username: {
        type: String
    },
    result: {
        type: Array,
        default: []
    },
    attempts: {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    achieved: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Result', resultModels)