import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios';
import {
    AssignmentsContainer,
    SidebarContainer,
    Content,
    AssignmentButton,
    AssignmentCard,
    AssignmentTitle,
    AssignmentDescription,
    AssignmentDoneMessage
} from '../../styles/AssignmentsStyles';

const StudentAssignments = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


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

  const handleDoAssignment = (id) => {
    // Implement your logic for handling assignment submission
  };

    return (
        <AssignmentsContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
              
                <h1>Assignments</h1>
                {assignments.map((assignment) => (
                          <AssignmentCard key={assignment.id}>
                            <AssignmentTitle>{assignment.title}</AssignmentTitle>
                            <AssignmentDescription>{assignment.description}</AssignmentDescription>
                            {!assignment.done ? (
                              <AssignmentForm onDoAssignment={() => handleDoAssignment(assignment.id)} />
                            ) : (
                              <AssignmentDoneMessage>Assignment Done</AssignmentDoneMessage>
                            )}
                          </AssignmentCard>
                        ))}
            </Content>
        </AssignmentsContainer>
    )
};

const AssignmentForm = ({ onDoAssignment }) => {
    const [opinion, setOpinion] = useState('');
  
    const handleInputChange = (event) => {
      setOpinion(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (opinion.trim() !== '') {
        onDoAssignment();
      } else {
        alert("Please provide your assignment solution.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea value={opinion} onChange={handleInputChange} placeholder="Submit your assignment here..." />
        <AssignmentButton type="submit">Submit</AssignmentButton>
      </form>
    );
  };

export default StudentAssignments 