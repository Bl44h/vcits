import express from "express"
import { createCoursework, getAllCoursework } from "../controllers/courseworkController.js"

const router = express.Router();

router.get('/getall', getAllCoursework);
router.post('/', createCoursework);

export default router;