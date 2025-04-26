import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
      await axios.post('http://localhost:4000/api/v1/students', newStudent);
      toast.success('✅ Student added successfully!');
      setNewStudent({ name: '', matricNumber: '', grade: '' });
      fetchStudents();  // 💡 Refresh the list from the server
    } catch (error) {
      console.error('Error adding student:', error);
      toast.error('❌ Failed to add student');
    }
  } else {
    toast.error('❌ Please fill out all fields');
  }
};


    return (
        <StudentsContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <StudentsContent>
                    <StudentsHeader>Students</StudentsHeader>
                        <AddStudentForm onSubmit={handleAddStudent}>
                            <AddStudentInput 
                                type="Text"
                                placeholder="Enter Student Name"
                                value={newStudent.name}
                                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                            />
                            <AddStudentInput 
                                type="Text"
                                placeholder="Enter Matric Number"
                                value={newStudent.matricNumber}
                                onChange={(e) => setNewStudent({ ...newStudent, matricNumber: e.target.value })}
                            />
                            <AddStudentInput 
                                type="Text"
                                placeholder="Enter ......"
                                value={newStudent.grade}
                                onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                            />
                            <AddStudentButton type="submit">Add Student</AddStudentButton>

                        </AddStudentForm>
                        
                        <StudentList>
                            {students.map((student) => (
                                          <StudentItem key={student.id}>{student.name} - {student.matricNumber} - {student.grade}</StudentItem>
                                        ))}
                        </StudentList>

                </StudentsContent>
            </Content>
            <ToastContainer 
                position="top-center" 
                autoClose={3000} 
                hideProgressBar={false} 
                newestOnTop={false}
              />

        </StudentsContainer>
    )
};

export default Students