import mongoose from "mongoose";
import validator from "validator";

const assessmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    matricNumber: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: String, 
        required: true
    },
    marks: {
        type: Number, 
        required: true
    }
})

export const Assessment = mongoose.model('Assessment', assessmentSchema)