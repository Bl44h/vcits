import { Class } from "../models/classSchema.js";
import { handleValidationError } from "../middlewares/errorhandler.js";

export const createClass = async (req, res, next) => {
    console.log(req.body);
    const { classname } = req.body;

    try{
        if ( !classname) {
            handleValidationError ("Please fill full form", 400);
        }
        await Class.create ({classname});
            res.status(200).json({
                success: true,
                message: "Class Created"
            });
    }catch(err){
        next(err);
    }
};

export const getAllClasses = async (req, res, next) => {
    try {
        const classes = await Class.find();
        res.status(200).json({
          success: true,
          classes,
        });   
      } catch (err) {
        next(err);
     
    }
};