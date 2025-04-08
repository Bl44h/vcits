import { Assessment } from "../models/assessmentSchema.js";
import { handleValidationError } from "../middlewares/errorhandler.js";

export const addAssessment = async (req, res, next) => {
    console.log(req.body);
    const { name, matricNumber, level, marks} = req.body;

    try{
        if ( !name || !matricNumber || !level || !marks) {
            handleValidationError ("Please fill all the fields", 400);
        }
        await Assessment.create ({name, matricNumber, level, marks});
            res.status(200).json({
                success: true,
                message: "A new assessment has been created!"
            });
    }catch(err){
        next(err);
    }
};

export const getAllAssessments = async (req, res, next) => {
    try {
        const assessments = await Assessment.find();
        res.status(200).json({
          success: true,
          assessments,
        });   
      } catch (err) {
        next(err);
     
    }
};