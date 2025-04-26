import express from "express";
import {config} from "dotenv";
import cors from "cors";

import { dbConnection } from "./database/dbConnection.js";
import studentRouter from "./routers/studentRouter.js";
import lecturerRouter from "./routers/lecturerRouter.js";
import courseworkRouter from "./routers/courseworkRouter.js";
import classRouter from "./routers/classRouter.js";
import attendanceRouter from "./routers/attendanceRouter.js";
import assignmentRouter from "./routers/assignmentRouter.js";
import assessmentRouter from "./routers/assessmentRouter.js";
import announcementRouter from "./routers/announcementRouter.js";


import { errorHandler } from "./middlewares/errorhandler.js";
import { upload } from "./middlewares/uploadMiddleware.js";

import dashboardRoutes from "./routers/dashboardRouter.js";

const app = express();
config({path: "./config/config.env"});

app.use( 
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"], 
    
    }) 
);
 
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/lecturers", lecturerRouter);
app.use("/api/v1/courseworks", courseworkRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/attendance", attendanceRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/assessments", assessmentRouter);
app.use("/api/v1/announcements", announcementRouter);

app.use("/api/v1/dashboard", dashboardRoutes);

dbConnection();

export default app;