import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios'
import {
    StudentsContainer,
    Content,
    StudentsContent,
    StudentsHeader,
    StudentList,
    StudentItem,
    AddStudentForm,
    AddStudentInput,
    AddStudentButton
} from '../../styles/StudentsStyles'

const Students = () => {

    const [newStudent, setNewStudent] = useState({ name: '', matricNumber: '', grade: '' });
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
    
      const handleAddStudent = async (e) => {
        e.preventDefault();
        if (newStudent.name.trim() !== '' && newStudent.matricNumber.trim() !== '' && newStudent.grade.trim() !== '') {
          try {
            const response = await axios.post('http://localhost:4000/api/v1/students', newStudent);
            setStudents([...students, response.data.student]);
            setNewStudent({ name: '', matricNumber: '', grade: '' });
          } catch (error) {
            console.error('Error adding student:', error);
          }
        }
      };

    return (
        <StudentsContainer>
            <Sidebar />
            <Content>
                <StudentsContent>
                    <StudentsHeader>Students</StudentsHeader>
                        <AddStudentForm onSubmit={handleAddStudent}>
                            <AddStudentInput 
                                typeof="Text"
                                placeholder="Enter Student Name"
                                value={newStudent.name}
                                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                            />
                            <AddStudentInput 
                                typeof="Text"
                                placeholder="Enter Matric Number"
                                value={newStudent.matricNumber}
                                onChange={(e) => setNewStudent({ ...newStudent, matricNumber: e.target.value })}
                            />
                            <AddStudentInput 
                                typeof="Text"
                                placeholder="Enter ......"
                                value={newStudent.grade}
                                onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                            />
                            <AddStudentButton type="sumit">Add Student</AddStudentButton>
                        </AddStudentForm>
                        
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

export default Students