import { Lecturer } from "../models/lecturerSchema.js";
import { handleValidationError } from "../middlewares/errorhandler.js";

export const createLecturer = async (req, res, next) => {
    console.log(req.body);
    const { name, email, course} = req.body;

    try{
        if ( !name || !email || !course) {
            handleValidationError ("Please fill full form", 400);
        }
        await Lecturer.create ({name, email, course});
            res.status(200).json({
                success: true,
                message: "Lecturer Created"
            });
    }catch(err){
        next(err);
    }
};

export const getAllLecturers = async (req, res, next) => {
    try {
        const lecturers = await Lecturer.find();
        res.status(200).json({
          success: true,
          lecturers,
        });   
      } catch (err) {
        next(err);
     
    }
};