import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios'
import {
    TeachersContainer,
    Content,
    TeachersContent,
    TeachersHeader,
    TeacherList,
    TeacherItem,
    AddTeacherForm,
    AddTeacherInput,
    AddTeacherButton

} from '../../styles/TeachersStyles'


const Lecturers = () => {

    const [newLecturer, setNewLecturer] = useState({ name: '', email: '', course: '' });
      const [lecturers, setLecturers] = useState([]);
    
      useEffect(() => {
        fetchLecturers();
      }, []);
    
      const fetchLecturers = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/v1/lecturers/getall');
          setLecturers(response.data.teachers);
        } catch (error) {
          console.error('Error fetching lecturers:', error);
        }
      };
    
      const handleAddLecturer = async (e) => {
        e.preventDefault();
        if (newLecturer.name.trim() !== '' && newLecturer.email.trim() !== '' && newLecturer.course.trim() !== '') {
          try {
            const response = await axios.post('http://localhost:4000/api/v1/lecturers', newLecturer);
            const createdLecturer = response.data.lecturer;
            setLecturers([...lecturers, createdLecturer]);
            setNewLecturer({ name: '', email: '', course: '' });
          } catch (error) {
            console.error('Error adding lecturer:', error);
          }
        }
      };
    
    return (
        <TeachersContainer>
            <Sidebar />
            <Content>
                <TeachersContent>
                    <TeachersHeader>Lecturers</TeachersHeader>
                        <AddTeacherForm onSubmit={handleAddLecturer}>
                            <AddTeacherInput
                                type="text"
                                placeholder="Enter Lecturer's name"
                                value={newLecturer.name}
                                onChange={(e) => setNewLecturer({ ...newLecturer, name: e.target.value })}
                            />
                            <AddTeacherInput
                                type="email"
                                placeholder="Enter Lecturer's email"
                                value={newLecturer.email}
                                onChange={(e) => setNewLecturer({ ...newLecturer, email: e.target.value })}
                            />
                            <AddTeacherInput
                                type="text"
                                placeholder="Enter Lecturer's course"
                                value={newLecturer.course}
                                onChange={(e) => setNewLecturer({ ...newLecturer, course: e.target.value })}
                            />
                            <AddTeacherButton type="submit"> Add Lecturer</AddTeacherButton>
                        </AddTeacherForm>

                        <TeacherList>
                        {lecturers.map((lecturer) => (
              <TeacherItem key={lecturer.id}>{lecturer.name} - {lecturer.email} - {lecturer.course}</TeacherItem>
            ))}
                        </TeacherList>
                </TeachersContent>
            </Content>
        </TeachersContainer>
    )
};

export default Lecturers