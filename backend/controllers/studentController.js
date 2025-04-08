import { Student } from "../models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorhandler.js";

export const createStudent = async (req, res, next) => {
    console.log(req.body);
    const { name, matricNumber, grade} = req.body;

    try{
        if ( !name || !matricNumber || !grade) {
            handleValidationError ("Please fill full form", 400);
        }
        await Student.create ({name, matricNumber, grade});
            res.status(200).json({
                success: true,
                message: "Student Created"
            });
    }catch(err){
        next(err);
    }
};

export const getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({
          success: true,
          students,
        });   
      } catch (err) {
        next(err);
     
    }
};