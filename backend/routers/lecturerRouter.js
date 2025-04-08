import express from "express"
import { createLecturer, getAllLecturers } from "../controllers/lecturerController.js"

const router = express.Router();

router.get('/getall', getAllLecturers);
router.post('/', createLecturer);

export default router;