import { Assignment } from "../models/assignmentSchema.js";
import { handleValidationError } from "../middlewares/errorhandler.js";

export const createAssignment = async (req, res, next) => {
    console.log(req.body);
    const { title, description, grade, deadline} = req.body;

    try{
        if ( !title || !description || !grade || !deadline) {
            handleValidationError ("Please fill full form", 400);
        }
        await Assignment.create ({title, description, grade, deadline});
            res.status(200).json({
                success: true,
                message: "Assignment is Created"
            });
    }catch(err){
        next(err);
    }
};

export const getAllAssignments = async (req, res, next) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({
          success: true,
          assignments,
        });   
      } catch (err) {
        next(err);
     
    }
};