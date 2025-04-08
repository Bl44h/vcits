import { Coursework } from "../models/courseworkSchema.js";
import { handleValidationError } from "../middlewares/errorhandler.js";

export const createCoursework = async (req, res, next) => {
    console.log(req.body);
    const { courseTitle, author} = req.body;

    try{
        if ( !courseTitle || !author) {
            handleValidationError ("Please fill full form", 400);
        }
        await Coursework.create ({courseTitle, author});
            res.status(200).json({
                success: true,
                message: "New Coursework has been added"
            });
    }catch(err){
        next(err);
    }
};

export const getAllCoursework = async (req, res, next) => {
    try {
        const courseworks = await Coursework.find();
        res.status(200).json({
          success: true,
          courseworks,
        });   
      } catch (err) {
        next(err);
     
    }
};