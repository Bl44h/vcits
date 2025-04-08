import mongoose from "mongoose";
import validator from "validator";

const lecturerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
})

export const Lecturer = mongoose.model('Lecturer', lecturerSchema)