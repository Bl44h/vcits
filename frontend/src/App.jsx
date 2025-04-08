import React from "react";

import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from '../src/components/home';
import ChooseUser from '../src/components/chooseUser';
//import AdminRegister from "./components/adminRegister";
import AdminSignIn from "./components/adminSignin";
import StudentSignIn from "./components/studentSignin";
import TeacherSignIn from "./components/teacherSignin"

import AdminDashboard from "./pages/admin/dashboard";
import StudentDashboard from "./pages/students/dashboard";
import TeacherDashboard from "./pages/teachers/dashboard";

import Classes from "./pages/admin/classes";
import Assessment from "./pages/admin/assessment";
import Assignments from "./pages/admin/assignments";
import Attendance from "./pages/admin/attendance";
import Courseworks from "./pages/admin/courseworks";
import Performance from "./pages/admin/performance";
import SettingsProfile from "./pages/admin/settingsProfile";
import sidebar from "./pages/admin/sidebar";
import Students from "./pages/admin/students";
import Lecturers from "./pages/admin/lecturers";
import Announcement from "./pages/admin/announcement";
import Materials from "./pages/admin/materials";

import StudentAssignments from "./pages/students/assignment";
import AssessmentSection from "./pages/students/assessment";
import PerformanceSection from "./pages/students/performance";
import AttendanceSection from "./pages/students/attendance";
import CourseworksSection from "./pages/students/courseworks";
import AnnouncementSection from "./pages/students/announcement";
import ProfileSection from "./pages/students/profile";
import Sidebar from "./pages/students/sidebar";

import ClassSection from "./pages/teachers/classes"
import StudentSection from "./pages/teachers/students"
import AssignmentSection from "./pages/teachers/assignment"
import CheckAssessmentSection from "./pages/teachers/assessment"
import CheckAttendanceSection from "./pages/teachers/attendance"
import CheckAnnouncementSection from "./pages/teachers/announcement"
import CheckPerformanceSection from "./pages/teachers/performance"
import TeacherSection from "./pages/teachers/lecturers"
import TeacherProfileSection from "./pages/teachers/profile"
//import Sidebar from "./pages/teachers/sidebar"

import { GlobalStyles } from './styles/styles';

function App() {
    return (
      <>
      <GlobalStyles />
      
      
      <Router>
      <Routes>
      <Route path ='/' element = {<Home/>} />
      <Route path = '/choose-user' element = {<ChooseUser/>} />

      {/* sign in pages routes */}

      <Route exact path='/admin-signIn' element = {<AdminSignIn/>} />
      <Route exact path='/student-signIn' element = {<StudentSignIn/>} />
      <Route exact path='/teacher-signIn' element = {<TeacherSignIn/>} />
      
      {/* dashboard routes */}
      <Route exact path= '/admin/dashboard' element = {<AdminDashboard/>} /> 
      <Route exact path= '/students/dashboard' element = {<StudentDashboard/>} />  
      <Route exact path= '/teachers/dashboard' element = {<TeacherDashboard/>} />      
      
      {/* Admin sections */}
      <Route exact path= '/admin/announcement' element = {<Announcement/>} /> 
      <Route exact path= '/admin/assessment' element = {<Assessment/>} /> 
      <Route exact path= '/admin/assignments' element = {<Assignments/>} />
      <Route exact path= '/admin/attendance' element = {<Attendance/>} /> 
      <Route exact path= '/admin/classes' element = {<Classes/>} /> 
      <Route exact path= '/admin/courseworks' element = {<Courseworks/>} /> 
      <Route exact path= '/admin/performance' element = {<Performance/>} /> 
      <Route exact path= '/admin/settings' element = {<SettingsProfile/>} /> 
      <Route exact path= '/admin/students' element = {<Students/>} /> 
      <Route exact path= '/admin/lecturers' element = {<Lecturers/>} /> 
      <Route exact path= '/admin/materials' element = {<Materials/>} /> 
      

      {/* Student Section*/}
      <Route exact path= '/students/assignment' element = {<StudentAssignments/>} />
      <Route exact path= '/students/performance' element = {<PerformanceSection/>} />
      <Route exact path= '/students/assessment' element = {<AssessmentSection/>} />
      <Route exact path= '/students/attendance' element = {<AttendanceSection/>} />
      <Route exact path= '/students/courseworks' element = {<CourseworksSection/>} />
      <Route exact path= '/students/announcement' element = {<AnnouncementSection/>} />
      <Route exact path= '/students/profile' element = {<ProfileSection/>} />

      {/* Teacher Section*/}
      <Route exact path= '/teachers/announcement' element = {<CheckAnnouncementSection/>} />  
      <Route exact path= '/teachers/assessment' element = {<CheckAssessmentSection/>} /> 
      <Route exact path= '/teachers/assignment' element = {<AssignmentSection/>} />  
      <Route exact path= '/teachers/attendance' element = {<CheckAttendanceSection/>} /> 
      <Route exact path= '/teachers/classes' element = {<ClassSection/>} />  
      <Route exact path= '/teachers/performance' element = {<CheckPerformanceSection/>} />
      <Route exact path= '/teachers/profile' element = {<TeacherProfileSection/>} />
      <Route exact path= '/teachers/students' element = {<StudentSection/>} /> 
      <Route exact path= '/teachers/lecturers' element = {<TeacherSection/>} />                                             

      </Routes>
      </Router>  

      </>
    );
};

export default App;