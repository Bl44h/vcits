import express from "express"
import { addAssessment, getAllAssessments } from "../controllers/assessmentController.js"

const router = express.Router();

router.get('/getall', getAllAssessments);
router.post('/', addAssessment);

export default router;