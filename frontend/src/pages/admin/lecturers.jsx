import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const [newLecturer, setNewLecturer] = useState({ name: '', email: '', course: '' });
      const [lecturers, setLecturers] = useState([]);
    
      useEffect(() => {
        fetchLecturers();
      }, []);
    
      const fetchLecturers = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/v1/lecturers/getall');
          setLecturers(response.data.lecturers);
        } catch (error) {
          console.error('Error fetching lecturers:', error);
        }
      };
    
      const handleAddLecturer = async (e) => {
        e.preventDefault();
        if (newLecturer.name.trim() !== '' && newLecturer.email.trim() !== '' && newLecturer.course.trim() !== '') {
          try {
            await axios.post('http://localhost:4000/api/v1/lecturers', newLecturer);
            toast.success('✅ Lecturer added successfully!');
            setNewLecturer({ name: '', email: '', course: '' });
            fetchLecturers();  // 💡 Fetch updated list from the server
          } catch (error) {
            console.error('Error adding lecturer:', error);
            toast.error('❌ Error adding lecturer');
          }
        } else {
          toast.error('❌ All fields are required');
        }
      };
      
    
    return (
        <TeachersContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
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
            <ToastContainer 
                  position="top-center" 
                  autoClose={3000} 
                  hideProgressBar={false} 
                  newestOnTop={false}
                />
        </TeachersContainer>
    )
};

export default Lecturers