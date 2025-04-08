import mongoose from "mongoose";
import validator from "validator";

const courseworkSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    
})

export const Coursework = mongoose.model('Coursework', courseworkSchema)