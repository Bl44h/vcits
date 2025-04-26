import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios'
import {
    ClassesContainer,
    Content,
    ClassesContent,
    ClassContainer,
    ClassHeader,
    ClassList,
    ClassItem,
    AddClassButton,
    AddClassForm,
    AddClassInput
} from '../../styles/ClassesStyles'

const Classes = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

      const [newClassName, setNewClassName] = useState('');
      const [classes, setClasses] = useState([]);
    
      useEffect(() => {
        fetchClasses();
      }, []);
    
      const fetchClasses = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/v1/class/getall');
          if (response.data && Array.isArray(response.data.classes)) {
            setClasses(response.data.classes);
          } else {
            console.error('Error fetching classes: Invalid data format', response.data);
          }
        } catch (error) {
          console.error('Error fetching classes:', error.message);
        }
      };
    
      const handleAddClass = async (e) => {
        e.preventDefault();
        if (newClassName.trim() !== '') {
          try {
            const response = await axios.post('http://localhost:4000/api/v1/class', {classname: newClassName });
            console.log('Response data:', response.data);
            toast.success('✅ Class added successfully!'); // Log the response data
            setClasses(prevClasses => {
              if (Array.isArray(prevClasses)) {
                return [...prevClasses, response.data]; // Use callback function to update state
              } else {
                console.error('Error adding class: Invalid state for classes:', prevClasses);
                toast.error('❌ Error adding class.');
                return []; // Reset classes state to an empty array
              }
            });
            setNewClassName('');
          } catch (error) {
            console.error('Error adding class:', error);
          }
        }
      };
    

    return (
        <ClassContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <ClassesContent>
                    <ClassHeader>Courses</ClassHeader>
                    <AddClassForm onSubmit={handleAddClass}>
                        <AddClassInput
                        type="text"
                        placeholder="Enter Course Title"
                        value={newClassName}
                        onChange={(e) => setNewClassName(e.target.value)}
                        />
                        <AddClassButton type="submit">Add Course</AddClassButton>
                    </AddClassForm>
                    <ClassList>
                      {/* Ensure that classes is an array before mapping over it */}
                                  {Array.isArray(classes) && classes.map((classItem, index) => (
                                    <ClassItem key={index}>{classItem.classname}</ClassItem>
                                  ))}

                    </ClassList>
                </ClassesContent>
            </Content>
            <ToastContainer 
                  position="top-center" 
                  autoClose={3000} 
                  hideProgressBar={false} 
                  newestOnTop={false}
                />
        </ClassContainer>
    )
};

export default Classes