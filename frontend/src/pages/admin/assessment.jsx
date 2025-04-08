import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios'
import {
    ExamContainer,
    SidebarContainer,
    Content,
    ExamHeader,
    ExamForm,
    FormLabel,
    FormInput,
    AddButton
} from '../../styles/ExamStyles'

const Assessment = () => {
    const [assessmentData, setAssessmentData] = useState([]);
    const [name, setName] = useState('');
    const [matricNumber, setMatricNumber] = useState('');
    const [level, setLevel] = useState('');
    const [marks, setMarks] = useState('');
  
    useEffect(() => {
      fetchAssessments();
    }, []);
  
    const fetchAssessments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/assessments/getall');
        if (Array.isArray(response.data)) {
          setAssessmentData(response.data);
        } else {
          setAssessmentData([response.data]); // Wrap non-array response in an array
        }
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };
  
    const handleAddAssessment = async (e) => {
      e.preventDefault();
      const newAssessment = { name, matricNumber, level, marks: parseInt(marks) };
      try {
        const response = await axios.post('http://localhost:4000/api/v1/assessments', newAssessment);
        // Ensure response data is always an object
        if (typeof response.data === 'object') {
          setAssessmentData([...assessmentData, response.data]);
          setName('');
          setMatricNumber('');
          setLevel('');
          setMarks('');
        } else {
          console.error('Error: API response data is not an object');
        }
      } catch (error) {
        console.error('Error adding exam:', error);
      }
    };
  
    const calculateTotalMarks = () => {
      let total = 0;
      for (let i = 0; i < assessmentData.length; i++) {
        total += assessmentData[i].marks;
      }
      return total;
    };
  

    return (
        
        <ExamContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
                <ExamHeader>Exam Details</ExamHeader>
                <ExamForm>
                    <FormLabel>Name:</FormLabel>
                    <FormInput
                        type="text"
                        required
                    />
                    <FormLabel>Matric Number:</FormLabel>
                    <FormInput
                        type="text"
                        required
                    />
                    <FormLabel>Level:</FormLabel>
                    <FormInput
                        type="text"
                        required
                    />
                    <FormLabel>Marks:</FormLabel>
                    <FormInput
                        type="number"
                        required
                    />
                    <AddButton type="submit">Add Exam</AddButton>
                </ExamForm>

                <h2>Total Marks:</h2>
                <h3>Exam Details:</h3>
                <ul></ul>
            </Content>
        </ExamContainer>
    )
};

export default Assessment