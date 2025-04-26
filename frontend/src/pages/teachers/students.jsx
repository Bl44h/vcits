import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import {
    StudentsContainer,
    Content,
    StudentsContent,
    StudentsHeader,
    StudentList,
    StudentItem,
    AddStudentButton,
    AddStudentForm,
    AddStudentInput
} from '../../styles/StudentsStyles'

const StudentSection = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const [students, setStudents] = useState([]);
    
      useEffect(() => {
        fetchStudents();
      }, []);
    
      const fetchStudents = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/v1/students/getall');
          setStudents(response.data.students);
        } catch (error) {
          console.error('Error fetching students:', error);
        }
      };
    

    return (
        <StudentsContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <StudentsContent>
                    <StudentsHeader>Students</StudentsHeader>
                    <StudentList>
                            {students.map((student) => (
                                          <StudentItem key={student.id}>{student.name} - {student.matricNumber} - {student.grade}</StudentItem>
                                        ))}
                       </StudentList>
                </StudentsContent>
            </Content>
        </StudentsContainer>
    )
};

export default StudentSection