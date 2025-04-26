import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import {
    AssignmentsContainer,
    Content,
    AssignmentsContent,
    AssignmentsHeader,
    AssignmentList,
    AssignmentItem,
    AssignmentTitle,
    AddAssignmentButton,
    AddAssignmentInput,
    AddAssignmentForm,
    AddAssignmentTextArea

} from '../../styles/AssignmentsStyles'

const AssignmentSection = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '' });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (newAssignment.title.trim() !== '' && newAssignment.description.trim() !== '' && newAssignment.grade.trim() !== '' && newAssignment.deadline.trim() !== '') {
      try {
        await axios.post('http://localhost:4000/api/v1/assignments', newAssignment);
        toast.success('✅ Assignment added successfully!');
        setNewAssignment({ title: '', description: '', grade: '', deadline: '' });
        fetchAssignments();  // Fetch fresh list from the server
      } catch (error) {
        console.error('Error adding assignment:', error);
        toast.error('❌ Failed to add assignment');
      }
    } else {
      toast.error('❌ All fields must be filled');
    }
  };
  


    return (
        <AssignmentsContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignments</AssignmentsHeader>
                    <AddAssignmentForm onSubmit={handleAddAssignment}>
                            <AddAssignmentInput
                                type="text"
                                placeholder="Enter Assignment title"
                                value={newAssignment.title}
                                onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                                 />
                            <AddAssignmentTextArea
                                type="text"
                                placeholder="Enter Assignment description"
                                value={newAssignment.description}
                                onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                                            />
                                            <AddAssignmentInput
                                                type="text"
                                                placeholder="Enter Assignment grade"
                                                value={newAssignment.grade}
                                                onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
                                            />
                                            <AddAssignmentInput
                                                type="text"
                                                placeholder="Enter Assignment deadline"
                                                value={newAssignment.deadline}
                                                onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
                                            />
                                            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>  
                                        </AddAssignmentForm>                
                    <AssignmentList>
                        {assignments.map((assignment) => (
                                <AssignmentItem key={assignment.id}>
                                    <strong>{assignment.title}: </strong>
                                    {assignment.description}, {assignment.grade}, {assignment.deadline}
                    </AssignmentItem>
                    ))}
                    </AssignmentList>
                </AssignmentsContent>
            </Content>
            <ToastContainer 
                position="top-center" 
                autoClose={3000} 
                hideProgressBar={false} 
                newestOnTop={false}
            />
        </AssignmentsContainer>
    )
};

export default AssignmentSection