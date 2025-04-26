import mongoose from "mongoose";
import validator from "validator";
import multer from "multer";

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
    fileUrl: {
        type: String}
    
})

export const Coursework = mongoose.model('Coursework', courseworkSchema)