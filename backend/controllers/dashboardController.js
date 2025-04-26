import { Student } from '../models/studentSchema.js';
import { Class } from '../models/classSchema.js';
import { Lecturer } from '../models/lecturerSchema.js';

export const getDashboardStats = async (req, res, next) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalClasses = await Class.countDocuments();
    const totalLecturers = await Lecturer.countDocuments();

    // Get date 7 days ago
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);

    const newStudentsThisWeek = await Student.countDocuments({
      createdAt: { $gte: last7Days }
    });

    res.status(200).json({
      success: true,
      stats: {
        totalStudents,
        totalClasses,
        totalLecturers
      }
    });
  } catch (err) {
    next(err);
  }
};
