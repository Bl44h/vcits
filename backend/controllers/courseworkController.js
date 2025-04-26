import { Coursework } from "../models/courseworkSchema.js";
import { handleValidationError } from "../middlewares/errorhandler.js";

export const createCoursework = async (req, res, next) => {
  const { courseTitle, author } = req.body;
  const fileUrl = req.file ? req.file.path : null;

  try {
    if (!courseTitle || !author || !fileUrl) {
      handleValidationError("Please fill full form", 400);
    }

    const newCoursework = await Coursework.create({ courseTitle, author, fileUrl });

    res.status(200).json({
      success: true,
      coursework: newCoursework,
      message: "New Coursework has been added"
    });

  } catch (err) {
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