import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import {
    TeachersContainer,
    Content,
    TeachersContent,
    TeachersHeader,
    TeacherList,
    TeacherItem,
    AddTeacherButton
} from '../../styles/TeachersStyles'

const TeacherSection = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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

    return (
        <TeachersContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <TeachersContent>
                    <TeachersHeader>Teachers</TeachersHeader>
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

export default TeacherSection